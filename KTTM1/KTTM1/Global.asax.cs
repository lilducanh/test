using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;

namespace KTTM1
{
    public class Global : HttpApplication
    {
        void Application_Start(object sender, EventArgs e)
        {
            // Code that runs on application startup
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            Application.Lock();
            if (!System.IO.File.Exists(Server.MapPath("~/Dem.txt")))
                System.IO.File.WriteAllText(Server.MapPath("~/Dem.txt"), "0");
            Application["SoLuotTruyCap"] =
             int.Parse(System.IO.File.ReadAllText(Server.MapPath("~/Dem.txt")));
            Application.UnLock();
        }
        void Session_Start(object sender, EventArgs e)
        {
           
            Application["SoLuotTruyCap"] =
            (int)Application["SoLuotTruyCap"] + 1;
            //Ghi xuống file
            System.IO.File.WriteAllText(Server.MapPath("~/Dem.txt"),
            Application["SoLuotTruyCap"].ToString());
            //Xử lý số người online
            //Nếu chưa có thì gán là 1, có rồi thì tăng 1
            if (Application["SLOnline"] == null)//chưa có
                Application["SLOnline"] = 1;
            else
                Application["SLOnline"] = (int)Application["SLOnline"] + 1;
        }        void Session_End(object sender, EventArgs e)
        {
            Application["SLOnline"] = (int)Application["SLOnline"] - 1;
        }
    }
}