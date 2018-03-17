CREATE PROCEDURE [dbo].[AddPalindrome] --[AddPalindrome] 'dad'
	@text varchar(MAX)
AS
BEGIN
	insert into Palindrome (Text) values (@text)
END