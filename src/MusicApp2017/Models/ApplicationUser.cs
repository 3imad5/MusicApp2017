using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicApp2017.Models
{
    public class ApplicationUser : IdentityUser
    {
        // Define custom properties here
        [Display(Name = "Favorite Genre")]
        [ForeignKey("GenreID")]
        public virtual int FavoriteGenre { get; set; }
        [ForeignKey("UserID")]
        public virtual List<Rating> Ratings { get; set; }
    }

}
