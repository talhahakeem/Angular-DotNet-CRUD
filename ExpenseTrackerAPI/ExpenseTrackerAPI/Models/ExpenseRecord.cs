using System;
using System.ComponentModel.DataAnnotations;

namespace ExpenseTrackerAPI.Models
{
    public class ExpenseRecord
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Description { get; set; } = string.Empty;

        [Required]
        public decimal TotalAmount { get; set; }

        [Required]
        public string PaidBy { get; set; } = string.Empty;

        public DateTime Date { get; set; } = DateTime.Now;

        public bool IsSettled { get; set; } = false;
    }
}