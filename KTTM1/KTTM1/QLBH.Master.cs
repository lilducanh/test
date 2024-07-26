using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace KTTM1
{
    public partial class QLBH : System.Web.UI.MasterPage
    {
        ketnoi kn = new ketnoi();
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.IsPostBack)
                return;
            string q = "Select * from DanhMuc";
            this.DataList1.DataSource = kn.layDL(q);
            this.DataList1.DataBind();
            lb_TruyCap.Text = Application["SoLuotTruyCap"].ToString();
            lb_online.Text = Application["SLOnline"].ToString();
        }

        protected void LinkButton1_Click(object sender, EventArgs e)
        {
            string madm = ((LinkButton)sender).CommandArgument;
            Response.Redirect("SanPham.aspx?madm=" + madm);

        }
    }
}