<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="TestAspose.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="JS/jquery.min.js" type="text/javascript"></script>
    <script src="JS/test.js" type="text/javascript"></script>
    <style>
        #mainDiv {
            position: relative;
            width: 100%;
            height: 100%;
        }

        #wrapper {
            position: relative;
            width: 70%;
            margin: 0 auto;
        }

        #resultDiv {
            min-width: 800px;
            height: 600px;
            border: 1px solid #808080;
            overflow: auto;
        }
    </style>
</head>
<body>
    <div id="mainDiv">
        <div id="wrapper">
            <form id="form1" runat="server">

                <div>
                    <asp:FileUpload ID="FileUpload1" runat="server" />
                    <asp:Button ID="btnUpload" runat="server" Text="Render" />
                    &nbsp;Select PDF
                </div>

                <div id="resultDiv"></div>
            </form>
        </div>
    </div>

</body>
</html>
