// © Microsoft Corporation. All rights reserved.

using Azure.Communication.Administration.Models;
using System.Collections.Generic;

namespace Calling
{
    public interface IChatAdminThreadStore
    {
	   Dictionary<string, CommunicationUserToken> Store { get; }
	   Dictionary<string, ContosoUserConfigModel> UseConfigStore { get; }
	   Dictionary<string, ServicesModel> ServicesStore { get; }
    }
}
