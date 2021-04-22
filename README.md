## Locally deploying the sample app

1. Go to Assignment folder and open `Assignment.csproj` solution in Visual Studio
2. Run `Assignment` project. The browser will open at localhost:5002

### Troubleshooting

1. Solution doesn\'t build, it throws errors during NPM installation/build
	
	Clean/rebuild the C# solution

## Publish to Azure

1. Right click the `Assignment` project and select Publish.
2. Create a new publish profile and select your app name, Azure subscription, resource group and etc.
3. Before publish, add your connection string with `Edit App Service Settings`, and fill in `ResourceConnectionString` as key and connection string (copy from appsettings.json) as value

## Additional Reading
- [Redux](https://redux.js.org/) - Client-side state management
- [FluentUI](https://developer.microsoft.com/en-us/fluentui#/) - Microsoft powered UI library
- [React](https://reactjs.org/) - Library for building user interfaces
- [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-3.1) - Framework for building web applications
