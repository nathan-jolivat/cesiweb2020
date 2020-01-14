var app = new Vue({
    el: '#app',
    data: {
        errors: [],
        names: null,
        email: null,
        subject: null,
        text: null
    },
    methods:{
        checkForm: function (e) {
            this.errors = [];

            if (this.names && this.email && this.subject && this.text) {

                axios.post('/contact-request/process',
                    {
                    names: this.names,
                    email: this.email,
                    subject: this.subject,
                    text: this.text
                }
                ).then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    this.errors.push(error);
                });
            }

            if (!this.names) {
                this.errors.push("Un prénom et un nom sont requis.");
            }
            if (!this.email) {
                this.errors.push("Une adresse mail est requise.");
            }
            if (!this.subject) {
                this.errors.push("Un sujet est requis.");
            }
            if (!this.text) {
                this.errors.push("Vous devez décrire votre message.");
            }



            e.preventDefault();
            e.stopPropagation();
        }
    }
});

