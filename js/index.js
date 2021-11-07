$(document).ready(() => {

    const data = {
        "company" : "",
        "first_name" : "",
        "last_name" : "",
        "email" : "",
        "phone" : "",
        "address" : "",
        "password" : "",
        "description" : ""
    }

    $('#phone').usPhoneFormat({
        format: '(xxx) xxx-xxxx',
    });

    $(".item").on('keyup', (e) => {
        const el = $(e.target)
        const inputName = el.attr('name');
        data[inputName] = el.val();

        el.removeClass('has-error');
        el.parent().find('.warning_error').remove();
    });

    $(".btn_clear").on('click', () => {
        for (key in data) {
            data[key] = ""
        }

        $(".item").each((item, value) => {
            $(value).val("");
            $(value).removeClass('has-error');
            $(value).removeClass('fix_height');
            $(value).parent().find('.warning_error').remove();
        })
    });

    $(".btn_submit").on('click', () => {
        let error = false;
        const phone = $('#phone');
        const email = $("#email");
        const pattern = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        const form = $(".main-signin__middle");

        form.find('.item').each(function () {
            let el = $(this);
            if (!el.val().length) {
                $(this).addClass('has-error');
                $(this).after('<span class="warning_error">'+"This field is required!"+'</span>');

                $(this).closest('.description_box').find('.item').addClass('fix_height')

                error = true
            }
        });

        if (phone.val().length > 0 && !pattern.test(email.val())) {
            email.addClass('has-error');
            email.after('<span class="warning_error">'+"Invalid email!"+'</span>');
            error = true
        }

        if (phone.val().length > 0 && phone.val().length < 14) {
            phone.addClass('has-error');
            phone.after('<span class="warning_error">'+"Invalid phone number!"+'</span>');
            error = true
        }

        if (!error) {
            $(".item").each((item, value) => {
                $(value).val("");
            })

            console.log(data)
        }
    });
});
