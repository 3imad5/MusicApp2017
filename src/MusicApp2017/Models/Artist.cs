using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace MusicApp2017.Models
{
    public class Artist
    {
        public int ArtistID { get; set; }

        [Required(ErrorMessage ="Artist name is required")]
        public string Name { get; set; }

        public string Bio { get; set; }
        [NotMapped]
        public virtual List<Album> Albums { get; set; }
    }
}