$(document).ready(function () {

  $('#first_form').submit(function (e) {
    e.preventDefault();
    var first_name = $('#first_name').val();
    var last_name = $('#last_name').val();
    var email = $('#email').val();
    var creditcard = $('#creditcard').val();
    var password = $('#password').val();
    var juisteAntwoord = false;
    var aantaljuist = 0;


    $(".error").remove();//dit verwijderd alle elementen met de classe 'error'.
    $(".check").remove()
    

    if (juisteAntwoord == false) {

      if (first_name.length < 1) {
        $('#first_name').after('<span class="error"><i class="fas fa-exclamation"></i> Geef je eerst je voornaam.</span>'); //span aanmaken als het niet aan de voorwaarden voldoet.
      }
      else {
        aantaljuist++;
        $('#first_name').after('<span class="check text-success"><i class="fas fa-check"></i></span>');
      }

      if (last_name.length < 1) {
        $('#last_name').after('<span class="error"><i class="fas fa-exclamation"></i> geef eerst je familienaam.</span>');
      }
      else {
        aantaljuist++;
        $('#last_name').after('<span class="check text-success"><i class="fas fa-check"></i></span>');
      }

      if (email.length < 1) {
        $('#email').after('<span class="error"><i class="fas fa-exclamation"></i> Geef je Email.</span>');
      }
      else {
        var regEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        var validEmail = regEx.test(email);
        if (!validEmail) {
          $('#email').after('<span class="error"><i class="fas fa-exclamation"></i> Geef een correcte email.</span>');
        }
        else {
          aantaljuist++;
          $('#email').after('<span class="check text-success"><i class="fas fa-check"></i></span>');
        }
      }

      if (creditcard.length < 1) {
        $('#creditcard').after('<span class="error"><i class="fas fa-exclamation"></i> geef je creditcardnummer. <br> (zonder spaties, bv. 4464755259012055)</span>');
      } else {
        //de volgende code is een regex voor Visa, MasterCard, American Express, Diners Club, Discover, and JCB cards.
        var regExCreditcard = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
        var validCreditcard = regExCreditcard.test(creditcard)
        if (!validCreditcard) {
          $('#creditcard').after('<span class="error"><i class="fas fa-exclamation"></i> Geef een correcte creditcard nummer. <br> (zonder spaties, bv. 4464755259012055) <br> tip: kopieer en plak deze nummer.</span>');
        }
        else {
          aantaljuist++;
          $('#creditcard').after('<span class="check text-success"><i class="fas fa-check"></i></span>');
        }
      }

      if (password.length != 4) {
        $('#password').after('<span class="error"><i class="fas fa-exclamation"></i> Pincode moet 4 cijfers lang zijn.</span>');
      }
      else {
        aantaljuist++;
        $('#password').after('<span class="check text-success"><i class="fas fa-check"></i></span>');
      }

      console.log("aantalJuist: ", + aantaljuist);

      if (aantaljuist == 5) {
        juisteAntwoord = true;
        window.location = 'gewonnen.html';
      }
      console.log('juisteAntwoord:' + juisteAntwoord);
    }
  });
});