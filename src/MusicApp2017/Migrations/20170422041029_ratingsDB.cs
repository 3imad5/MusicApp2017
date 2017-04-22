using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MusicApp2017.Migrations
{
    public partial class ratingsDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rating_Albums_AlbumID",
                table: "Rating");

            migrationBuilder.DropForeignKey(
                name: "FK_Rating_AspNetUsers_UserID",
                table: "Rating");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Rating",
                table: "Rating");

            migrationBuilder.RenameTable(
                name: "Rating",
                newName: "Ratings");

            migrationBuilder.RenameIndex(
                name: "IX_Rating_UserID",
                table: "Ratings",
                newName: "IX_Ratings_UserID");

            migrationBuilder.RenameIndex(
                name: "IX_Rating_AlbumID",
                table: "Ratings",
                newName: "IX_Ratings_AlbumID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Ratings",
                table: "Ratings",
                column: "RatingID");

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_Albums_AlbumID",
                table: "Ratings",
                column: "AlbumID",
                principalTable: "Albums",
                principalColumn: "AlbumID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Ratings_AspNetUsers_UserID",
                table: "Ratings",
                column: "UserID",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_Albums_AlbumID",
                table: "Ratings");

            migrationBuilder.DropForeignKey(
                name: "FK_Ratings_AspNetUsers_UserID",
                table: "Ratings");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Ratings",
                table: "Ratings");

            migrationBuilder.RenameTable(
                name: "Ratings",
                newName: "Rating");

            migrationBuilder.RenameIndex(
                name: "IX_Ratings_UserID",
                table: "Rating",
                newName: "IX_Rating_UserID");

            migrationBuilder.RenameIndex(
                name: "IX_Ratings_AlbumID",
                table: "Rating",
                newName: "IX_Rating_AlbumID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Rating",
                table: "Rating",
                column: "RatingID");

            migrationBuilder.AddForeignKey(
                name: "FK_Rating_Albums_AlbumID",
                table: "Rating",
                column: "AlbumID",
                principalTable: "Albums",
                principalColumn: "AlbumID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Rating_AspNetUsers_UserID",
                table: "Rating",
                column: "UserID",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
