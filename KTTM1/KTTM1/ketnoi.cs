using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
namespace KTTM1
{
     
    public class ketnoi
    {
        SqlConnection conn = new SqlConnection();
        private void laykn()
        {
            conn = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=""D:\Microsoft Visual Studio\Project\KTTM1\KTTM1\App_Data\db.mdf"";Integrated Security=True");
            conn.Open();
        }
        private void dongkn()
        {
            if (conn.State == ConnectionState.Open) ;
                conn.Close();
        }
         public DataTable layDL(string sql)
        {
            DataTable dt = new DataTable();
            {
                try
                {
                    laykn();
                    SqlDataAdapter da = new SqlDataAdapter(sql, conn);
                    da.Fill(dt);
                }
                catch
                {
                    dt = null;
                }
                finally
                {
                    dongkn();
                }
                return dt;
            }
            
        }
    }
}