var User = function (greeter, lightdmuser) {
	this.greeter		= greeter;
	this.defaultAvatar	= "./avatar.svg";
	this.user			= lightdmuser;
	this.user.string	= this.user.real_name != '' ? this.user.real_name : this.user.name;
	this.avatar			= this.user.image != '' ? this.user.image : this.defaultAvatar;
	this.user.id		= this.greeter.userController.list.length;

	this.greeter.gui.addToList(this.user);
	this.greeter.userController.list.push(this.user);
};
