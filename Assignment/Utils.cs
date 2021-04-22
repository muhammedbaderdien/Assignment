﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Calling
{
    public class Utils
    {
        public static string ExtractApiChatGatewayUrl(string resourceConnectionString)
        {
            var uri = new Uri(resourceConnectionString.Replace("endpoint=", string.Empty, StringComparison.OrdinalIgnoreCase));
            return $"{uri.Scheme}://{uri.Host}";
        }
    }
}
