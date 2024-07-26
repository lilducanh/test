using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace KTTM1
{
    public partial class SanPham : System.Web.UI.Page
    {
        ketnoi kn = new ketnoi();
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.IsPostBack)
                return;
            string q;
            string madm = Request.QueryString["madm"];
            if (string.IsNullOrEmpty(madm))
                q = "select * from HangHoa";
            else
            {
                q = "select * from HangHoa where MaDM ='" + madm + "'";
            }
            this.DataList1.DataSource = kn.layDL(q);
            this.DataList1.DataBind();
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            string mh = ((Button)sender).CommandArgument;
            Response.Redirect("ChiTiet.aspx?mh=" + mh);
        }
    }
}