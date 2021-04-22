using Azure.Communication.Administration.Models;
using System.Threading.Tasks;

namespace Calling
{
    public interface IUserTokenManager
    {
        Task<CommunicationUserToken> GenerateTokenAsync(string resourceConnectionString);
        Task<CommunicationUserToken> RefreshTokenAsync(string resourceConnectionString, string expiredToken);
    }
}
