using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using MusicApp2017.Models;
using Microsoft.AspNetCore.Authorization;

namespace MusicApp2017.Controllers
{
    public class ArtistsController : Controller
    {
        private readonly MusicDbContext _context;

        public ArtistsController(MusicDbContext context)
        {
            _context = context;
        }
        // GET: /<controller>/
        public IActionResult Index()
        {
            var artists = _context.Artists.ToList();

            return View(artists);
        }
        [Authorize]
        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        [Authorize]
        public IActionResult Create(Artist a)
        {
            if (ModelState.IsValid)
            {
                try { _context.Artists.Add(a); }
                catch
                {
                }
                _context.SaveChanges();
                return Index();
            }
            else
            {
                return Create();
            }
        }

        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var artist = await _context.Artists.Include("Albums").SingleOrDefaultAsync(m => m.ArtistID == id);
            if (artist == null)
            {
                return NotFound();
            }
            //ViewBag.AlbumsList = _context.Albums.First(m => m.ArtistID == id);
            //ViewBag.AlbumsList = new SelectList(_context.Albums, "Title", "ArtistID");
            return View(artist);
        }
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var artist = await _context.Artists.SingleOrDefaultAsync(m => m.ArtistID == id);
            if (artist == null)
            {
                return NotFound();
            }
            return View(artist);
        }
        [Authorize(Roles = "Administrator")]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("ArtistID, Name, Bio")] Artist artist)
        {
            if (id != artist.ArtistID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                _context.Update(artist);
                await _context.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(artist);
        }
    }
}
