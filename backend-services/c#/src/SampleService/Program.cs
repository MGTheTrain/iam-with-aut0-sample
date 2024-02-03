using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using SampleService.Handlers;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.Authority = $"https://{builder.Configuration["Auth0:Domain"]}.us.auth0.com/"; // e.g. "https://dev-d81cx3ar5jc0hn2z.us.auth0.com/"
    options.Audience = builder.Configuration["Auth0:Audience"]; // e.g. "https://quickstart/api"
});

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("admin:permission", policy =>
        policy.Requirements.Add(new HasPermissionRequirement("admin:permission")));
});

builder.Services.AddSingleton<IAuthorizationHandler, HasPermissionHandler>();


builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Sample Service", Version = "v1" });

    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Description = "JWT Authorization header using the Bearer scheme. Example: \"Bearer {token}\"",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.ApiKey
    });

    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            Array.Empty<string>()
        }
    });
});

builder.Services.AddControllers();

var app = builder.Build();

app.UseRouting();

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Sample Service");
});

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
