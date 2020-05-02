using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Net.Http;

namespace heuristics_getorders
{
    public static class GetOrders
    {
        [FunctionName("GetOrders")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            string authToken = req.Query["authToken"];
            string orderApi = "https://api.ebay.com/sell/fulfillment/v1/order?limit=1000"

            var client = new HttpClient();
            client.DefaultRequestHeaders.Add("bearer", authToken);
            var orders = await client.GetAsync(orderApi);

            return new OkObjectResult(orders.Content);
        }
    }
}
