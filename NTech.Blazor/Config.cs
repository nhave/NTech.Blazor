using NTech.Blazor.Services;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class NtechBlazorServiceCollectionExtensions
    {
        public static IServiceCollection AddNTechBlazor(this IServiceCollection services)
        {
            services.AddScoped<INTechBlazorService, NTechBlazorService>();
            return services;
        }
    }
}