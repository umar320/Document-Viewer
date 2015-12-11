using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using TestAspose.App_Code;

namespace TestAspose
{
    
    public class MainHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            // Check the action variable in ajax http request 
            if (context.Request["action"].ToString() == "getWordtoHtml")
            {
               // File path is also included in the http request
                String FilePath = context.Request["filepath"].ToString();
                
                // Call the conversion method of operation class which is converting word file to HTML using Aspose Word Library
                  String obj = (new Operation()).getHtml(FilePath);
                
                // Write the converted HTML text in the response of ajax call
                  context.Response.ContentType = "text/plain";
                  context.Response.Write(obj);

               
            }
          
        }
       

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}