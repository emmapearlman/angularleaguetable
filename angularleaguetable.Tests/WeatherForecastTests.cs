using angularleaguetable;
using Xunit;

namespace angularleaguetable.Tests
{
    public class WeatherForecastTests
    {
        [Theory]
        [InlineData(0, 32)]
        [InlineData(10, 49)]
        [InlineData(100, 211)]
        [InlineData(-10, 15)]
        public void TemperatureF_UsesExpectedFormula(int temperatureC, int expectedF)
        {
            var forecast = new WeatherForecast
            {
                TemperatureC = temperatureC
            };

            Assert.Equal(expectedF, forecast.TemperatureF);
        }
    }
}
