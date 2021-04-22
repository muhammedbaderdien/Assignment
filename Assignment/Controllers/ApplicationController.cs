using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace Calling
{
    [ApiController]
    public class ApplicationController
    {
	   IStore _store;

	   public ApplicationController(IStore store)
	   {
		  _store = store;
	   }

	   [Route("services/{serviceName}")]
	   [HttpGet]
	   public List<ServicesModel> GetServices(string serviceName)
	   {
		  List<ServicesModel> services = new List<ServicesModel>();
		  services.Add(new ServicesModel()
		  {
			 name = "Siteconstructor.io - From API"
		  });
		  services.Add(new ServicesModel()
		  {
			 name = "Appvision.com - From API"
		  });
		  services.Add(new ServicesModel()
		  {
			 name = "Analytics.com - From API"
		  });
		  services.Add(new ServicesModel()
		  {
			 name = "Logotype - From API"
		  });
		  if (serviceName == "*")
		  {
			 return services;
		  }
		  else
		  {
			 return services.Where(x => x.name.ToLower().Contains(serviceName)).ToList();
		  }
	   }
    }
}
