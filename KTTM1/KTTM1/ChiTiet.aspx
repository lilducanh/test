<%@ Page Title="" Language="C#" MasterPageFile="~/QLBH.Master" AutoEventWireup="true" CodeBehind="ChiTiet.aspx.cs" Inherits="KTTM1.ChiTiet" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server" >
    <asp:DataList ID="DataList1" runat="server" RepeatColumns="3">
        <ItemTemplate>
            <asp:Image ID="Image1" runat="server" ImageUrl='<%# "~/img/"+Eval("HinhAnh") %>' Width="200" />
            <br />
           <b> <asp:Label ID="Label1" runat="server" Text='<%# Eval("TenHang") %>'></asp:Label></b>
            <br />
            <asp:Label ID="Label2" runat="server" Text='<%# Eval("MoTa") %>'></asp:Label>
            <br />
           <b> <asp:Label ID="Label3" runat="server" Text="Don Gia"></asp:Label></b>
            <asp:Label ID="Label4" runat="server" Text='<%# Eval("DonGia" ,"{0:0,0}") %>'></asp:Label>
            <asp:Label ID="Label5" runat="server" Text='<%# Eval("DonViTinh") %>'></asp:Label>
            <br />
          <b>  <asp:Label ID="Label6" runat="server" Text="So Luong"></asp:Label></b>
            <br />
            <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
            <br />
            <asp:Button ID="Button1" runat="server" Text="Them Vao Gio Hang" />
            <asp:Button ID="Button2" runat="server" Text="Mua" />
        </ItemTemplate>
    </asp:DataList>
</asp:Content>
