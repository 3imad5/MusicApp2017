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
        public virtual int FavoriteGenre { get; set; }
    }

}
