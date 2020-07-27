using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using MyDraftAPI.Data;
using Microsoft.OpenApi.Models;
using System.Reflection;
using System.IO;
using MyDraftAPI.Repository;
using AutoMapper;
using MyDraftAPI.MyDraftMapper;
using MyDraftAPI.Repository.IRepository;

namespace MyDraftAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // CORS
            services.AddCors();
            // DBContext
            services.AddDbContext<Num5dataContext>
                (options => options.UseSqlServer(Configuration.GetConnectionString("Num5dataENTITIES")));
            // Configure Repository
            services.AddScoped<IApiPlayerRepository, ApiPlayerRepository>();
            services.AddScoped<IApiNewsRepository, ApiNewsRepository>();
            services.AddScoped<IApiUserLeagueRepository, ApiUserLeagueRepository>();
            services.AddScoped<IApiDraftRepository, ApiDraftRepository>();
            services.AddAutoMapper(typeof(MyDraftMappings));
            // Swashbuckle.AspNetCore
            services.AddMvc();
            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("MyDraftOpenAPISpec", new OpenApiInfo { 
                    Title = "MyDraft API", 
                    Version = "v1",
                    Description = "MyDraft API supporting application.",
                    Contact = new Microsoft.OpenApi.Models.OpenApiContact()
                    {
                        Email = "ErishMF@gmail.com",
                        Name = "Erish Faggett",
                        Url = new Uri("https://www.linkedin.com/in/erish-faggett-a5352094/")
                    },
                });
                // Specify Project XML file path
                var xmlCommentFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var cmlCommentsFullPath = Path.Combine(AppContext.BaseDirectory, xmlCommentFile);
                options.IncludeXmlComments(cmlCommentsFullPath);
            });

            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            // Swashbuckle.AspNetCore
            app.UseSwagger();
            app.UseSwaggerUI(options =>
            {
                options.SwaggerEndpoint("/swagger/MyDraftOpenAPISpec/swagger.json", "MyDraft API");
                options.RoutePrefix = "";
            });

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
