using System.Linq;
using angularleaguetable.Controllers;
using Microsoft.Extensions.Logging.Abstractions;
using Xunit;

namespace angularleaguetable.Tests.Controllers
{
    public class WeatherForecastControllerTests
    {
        private static readonly string[] AllowedSummaries =
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild",
            "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [Fact]
        public void Get_ReturnsFiveForecastsWithValidRangesAndSummaries()
        {
            var controller = new WeatherForecastController(NullLogger<WeatherForecastController>.Instance);

            var forecasts = controller.Get().ToArray();

            Assert.Equal(5, forecasts.Length);
            Assert.All(forecasts, forecast =>
            {
                Assert.InRange(forecast.TemperatureC, -20, 54);
                Assert.Contains(forecast.Summary, AllowedSummaries);
            });
        }

        [Fact]
        public void Get_ReturnsForecastsWithStrictlyIncreasingDates()
        {
            var controller = new WeatherForecastController(NullLogger<WeatherForecastController>.Instance);

            var forecasts = controller.Get().ToArray();

            Assert.Equal(5, forecasts.Length);
            for (var i = 1; i < forecasts.Length; i++)
            {
                Assert.True(
                    forecasts[i].Date > forecasts[i - 1].Date,
                    "Expected each forecast date to be greater than the previous date.");
            }
        }
    }
}
