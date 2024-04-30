Public Class Form1
    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load

    End Sub

    Private Sub TextBox1_TextChanged(sender As Object, e As EventArgs) Handles txtHW.TextChanged

    End Sub

    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click

        Dim Hours, rate As Integer
        Hours = txtHW.Text
        rate = txtHr.Text
        txtGros.Text = Hours * rate
        txtDed.Text = Hours * rate * 0.2
        txtNp.Text = (Hours * rate) - (Hours * rate * 0.2)









    End Sub

    Private Sub Button2_Click(sender As Object, e As EventArgs) Handles Button2.Click
        txtHW.Text = ""
        txtHr.Text = ""
        txtDed.Text = ""
        txtGros.Text = ""
        txtNp.Text = ""
    End Sub

    Private Sub Button3_Click(sender As Object, e As EventArgs) Handles Button3.Click
        Application.Exit()
    End Sub
End Class
