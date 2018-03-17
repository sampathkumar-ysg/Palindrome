using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Cors.Internal;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Palindrome.Api.DBContext;
using Palindrome.Api.DBService;
using Palindrome.Api.Services;
using Palindrome.Api.Services.Contracts;

namespace Palindrome.Api
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
            //services.AddDbContext<PalindromeDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("PalindromeContext")));

            services.AddMvc(options =>
            {
                options.FormatterMappings.SetMediaTypeMappingForFormat("json", "application/json");
            });

            //services.AddEntityFramework()
            //    .AddDbContext <PalindromeDbContext>
            //    (option => option.UseSqlServer(Configuration["database:connection"]));

            services.AddDbContext<PalindromeDbContext>(options => options.UseSqlServer(Configuration["database:connection"]));

            services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));

            services.Configure<MvcOptions>(options =>
            {
                options.Filters.Add(new CorsAuthorizationFilterFactory("MyPolicy"));
            });

            services.AddTransient<IPalindromeService, PalindromeService>();
            services.AddTransient<IPalindromeDbService, PalindromeDbService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();
        }
    }
}
