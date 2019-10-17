
    var id = 1;
    var json_form = {
                    "Code fournisseur (DUNS)": "99-997-0494",
    
                    "Code article fournisseur" : "CF01",
                    
                    "Code interne de substance" : "8562",
                    
                    "REACH" : "Y",
                    
                    "CM" : "N",
                    
                    "Nom substance" : "Plomb métal",
                    
                    "N° EC" : "231-100-4",
                    
                    "N° CAS" : "7439-92-1",
                    
                    "Date de la déclaration" : "25/02/2019",
                    
                    "Poids de l'article" : "50",
                    
                    "Poids de la substance" : "0.05",
                    
                    "Origine substance pays couvert" : "France"
                    };
    $.ajax({
            url: 'https://hyperledger-fabric.cfapps.eu10.hana.ondemand.com/api/v1/chaincodes/599c97b7-a052-4b22-907b-5702e54e45f2-com-sap-icn-blockchain-example-crud/1/3',
            type: 'POST',
            
            data: json_form,
    
            beforeSend: function(xhr) {
                 xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vcDIwMDE3ODE5Mjh0cmlhbC5hdXRoZW50aWNhdGlvbi5ldTEwLmhhbmEub25kZW1hbmQuY29tL3Rva2VuX2tleXMiLCJraWQiOiJrZXktaWQtMSIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkZjlhM2FjMjMxMWM0YmUyYjRkMTAxMGExZmYzNmU4NSIsImV4dF9hdHRyIjp7ImVuaGFuY2VyIjoiWFNVQUEiLCJ6ZG4iOiJwMjAwMTc4MTkyOHRyaWFsIiwic2VydmljZWluc3RhbmNlaWQiOiI5ZTE3OTcwNC1lZWY2LTQyY2YtYjZkMS1mZmJlNmFkZmEwNGUifSwic3ViIjoic2ItOWUxNzk3MDQtZWVmNi00MmNmLWI2ZDEtZmZiZTZhZGZhMDRlIWIyNTU3NXxuYS00MjBhZGZjOS1mOTZlLTQwOTAtYTY1MC0wMzg2OTg4YjY3ZTAhYjE4MzYiLCJhdXRob3JpdGllcyI6WyJ1YWEucmVzb3VyY2UiXSwic2NvcGUiOlsidWFhLnJlc291cmNlIl0sImNsaWVudF9pZCI6InNiLTllMTc5NzA0LWVlZjYtNDJjZi1iNmQxLWZmYmU2YWRmYTA0ZSFiMjU1NzV8bmEtNDIwYWRmYzktZjk2ZS00MDkwLWE2NTAtMDM4Njk4OGI2N2UwIWIxODM2IiwiY2lkIjoic2ItOWUxNzk3MDQtZWVmNi00MmNmLWI2ZDEtZmZiZTZhZGZhMDRlIWIyNTU3NXxuYS00MjBhZGZjOS1mOTZlLTQwOTAtYTY1MC0wMzg2OTg4YjY3ZTAhYjE4MzYiLCJhenAiOiJzYi05ZTE3OTcwNC1lZWY2LTQyY2YtYjZkMS1mZmJlNmFkZmEwNGUhYjI1NTc1fG5hLTQyMGFkZmM5LWY5NmUtNDA5MC1hNjUwLTAzODY5ODhiNjdlMCFiMTgzNiIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMiLCJyZXZfc2lnIjoiOGY0NmFiNGMiLCJpYXQiOjE1NzEzMjMxNDcsImV4cCI6MTU3MTM2NjM0NywiaXNzIjoiaHR0cDovL3AyMDAxNzgxOTI4dHJpYWwubG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoiZmYzNGQ4MTAtOGUxYy00MjExLWFmZDQtMWU0MWIzMTVjODFlIiwiYXVkIjpbInNiLTllMTc5NzA0LWVlZjYtNDJjZi1iNmQxLWZmYmU2YWRmYTA0ZSFiMjU1NzV8bmEtNDIwYWRmYzktZjk2ZS00MDkwLWE2NTAtMDM4Njk4OGI2N2UwIWIxODM2IiwidWFhIl19.r3bsEmh4PskkUTNu1S58e-jkvOEgXEPg66cRPSxWkxj4DqnjyCUTSw_jysWxijZJP0ff37nL5F8J-hV1HczEYeOIHHl4MJsiGXehzc4GHwNXKDJhblry5Z2-VtsfzjScGQoBA4AZyCPfJbf15C8fxBOeIQVy_zDu1IgUU9aj7FdM8HYVvzfsrSol6A5pF0g57boy9QnfDon4juK3dAv8zb50yD_a-T8SRQLClY4I5uMtFOYwiiv06r4kP6Yv14L3koYcMdE2wmbHj-vJAGakGxIXUfJl2KM39bIN8LseXIun75FVGSwFypMMny6BcFv-MFqIDgPCBZuefL9EJFQS5wRu2wLkpHCjPT74p_xbwA7MxMNfMniTqz6VgnrR5ZJ8klzjAu4tn6fbciSWiJydGigy49LElukLU8dS_laIZPolhA1hFalivKE4_pi9IJp1C-P53mrAN-b3nDWEyAv-eSR42CIglm22reT-WTc7CzOdkZoZm_o5O1Ny85-81fg-t8CA39RtEtcRNI5aoNt102rAqjyjhS1125Xik4qJ0Kn6NPtKy_JjCxKrR7bc40u_9Zu73ZMJilH9pPVlZzdeIUoF8H_9aRyp_5L170plxgG5MXqt8XqMK2LKT0sZcioYlw8M6pTcuCz6vZgvYcoLT0uGiS7VHfABXGULvMWHfwk")
            }, success: function(data){
                console.log(data);
                //process the JSON data etc
            }
    })
