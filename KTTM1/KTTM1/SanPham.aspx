<%@ Page Title="" Language="C#" MasterPageFile="~/QLBH.Master" AutoEventWireup="true" CodeBehind="SanPham.aspx.cs" Inherits="KTTM1.SanPham" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:DataList ID="DataList1" runat="server" RepeatColumns="3">
        <ItemTemplate>
            <asp:Image ID="Image1" runat="server" ImageUrl='<%# "~/img/"+Eval("HinhAnh") %>' Width="200"/>
            <br />
            <asp:Label ID="Label1" runat="server" Text='<%# Eval("TenHang") %>'></asp:Label>
            <br />
            <asp:Label ID="Label2" runat="server" Text="Don Gia :"></asp:Label>
            <asp:Label ID="Label3" runat="server" Text='<%# Eval("DonGia" ,"{0:0,0}") %>'></asp:Label>
            <asp:Label ID="Label4" runat="server" Text='<%# Eval("DonViTinh") %>'></asp:Label>
            <br />
            <asp:Button ID="Button1" runat="server" CommandArgument='<%# Eval("MaHang") %>' OnClick="Button1_Click" Text="Detail" />
        </ItemTemplate>
    </asp:DataList>
</asp:Content>
