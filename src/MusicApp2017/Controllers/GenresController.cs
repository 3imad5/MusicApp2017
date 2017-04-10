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
    public class GenresController : Controller
    {
        private readonly MusicDbContext _context;

        public GenresController(MusicDbContext context)
        {
            _context = context;
        }
        // GET: /<controller>/
        public IActionResult Index()
        {
            var genres = _context.Genres.ToList();
            return View(genres);
        }
        [Authorize]
        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        [Authorize]
        public IActionResult Create(Genre g)
        {
            if (ModelState.IsValid)
            {
                try { _context.Genres.Add(g); }
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
        
        public ActionResult Details(int? id)
        {
            var genres = _context.Genres.Include("Albums").Single(g => g.GenreID == id);

            return View(genres);
        }
        [Authorize]
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var genre = await _context.Genres.SingleOrDefaultAsync(m => m.GenreID == id);
            if (genre == null)
            {
                return NotFound();
            }
            return View(genre);
        }
        [Authorize]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("GenreID, Name, Albums")] Genre genre)
        {
            if (id != genre.GenreID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                _context.Update(genre);
                await _context.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(genre);
        }
    }
}
