﻿// © Microsoft Corporation. All rights reserved.

using Azure.Communication.Administration.Models;
using System.Collections.Generic;

namespace Calling
{
    public class InMemoryChatAdminThreadStore : IChatAdminThreadStore
    {
	   public Dictionary<string, CommunicationUserToken> Store { get; }

	   public Dictionary<string, ContosoUserConfigModel> UseConfigStore { get; }

	   /// <summary>
	   /// To maintain a storage of all of the chat threads and their associated moderater "users" to add in new users
	   /// </summary>
	   public InMemoryChatAdminThreadStore()
	   {
		  Store = new Dictionary<string, CommunicationUserToken>();
		  UseConfigStore = new Dictionary<string, ContosoUserConfigModel>();
	   }
    }
}