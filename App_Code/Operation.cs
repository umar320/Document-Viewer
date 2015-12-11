using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Aspose.Words;

namespace TestAspose.App_Code
{
    public class Operation
    {

        public String getHtml(String WordFilePath)
        {
            // Create the instance of Document class of Aspose Word Library.
            Document doc = new Document(WordFilePath);

            // Return the document text in HTML5 format
            return doc.ToString(Aspose.Words.SaveFormat.Html);
        }
    }
}