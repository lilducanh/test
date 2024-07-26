using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace KTTM1
{
    public partial class ChiTiet : System.Web.UI.Page
    {
        ketnoi kn = new ketnoi();
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.IsPostBack)
                return;
            string q;
            string mh = Request.QueryString["mh"];
            if (string.IsNullOrEmpty(mh))
                q = "select * from MaHang";
            else
            {
                q = "select * from HangHoa where MaHang ='" + mh + "'";
            }
            this.DataList1.DataSource = kn.layDL(q);
            this.DataList1.DataBind();
        }
    }
}