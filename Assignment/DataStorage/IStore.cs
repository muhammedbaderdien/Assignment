using System.Collections.Generic;

namespace Calling
{
    public interface IStore
    {
	   Dictionary<string, ServicesModel> ServicesStore { get; }
    }
}
