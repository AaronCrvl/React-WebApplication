using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace WebApplication1.Models
{
    public partial class AppDbContext : DbContext
    {
        public AppDbContext()
        {
        }

        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Account> Account { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
//            if (!optionsBuilder.IsConfigured)
//            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
//                optionsBuilder.UseSqlServer("Password=P@ssw0rd; User ID=wgcapp; Initial Catalog=WGC_VIANET; Data Source=WGCSERVERSQL01; connection timeout=600;");
//            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Account>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Ativo)
                    .HasColumnName("ATIVO")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Email)
                    .HasColumnName("EMAIL")
                    .HasMaxLength(20);

                entity.Property(e => e.InclusionDate)
                    .HasColumnName("INCLUSION_DATE")
                    .HasColumnType("datetime");

                entity.Property(e => e.Nanme)
                    .HasColumnName("NANME")
                    .HasMaxLength(20);

                entity.Property(e => e.UserPassword)
                    .HasColumnName("USER_PASSWORD")
                    .HasMaxLength(15);
            });
        }
    }
}
