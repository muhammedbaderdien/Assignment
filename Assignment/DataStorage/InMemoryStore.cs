using System.Collections.Generic;

namespace Calling
{
    public class InMemoryStore : IStore
    {
	   public Dictionary<string, ServicesModel> ServicesStore { get; }

	   public InMemoryStore()
	   {
		  ServicesStore = new Dictionary<string, ServicesModel>();
	   }
    }
}
