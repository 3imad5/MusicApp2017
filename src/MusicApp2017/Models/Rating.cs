using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace MusicApp2017.Models
{
    public class Rating
    {
        public int RatingID { get; set; }
        public int AlbumID { get; set; }
        public double RatingValue { get; set; }

        public string UserID { get; set; }

    }
}
