$.ajax({
        url: 'https://hyperledger-fabric.cfapps.eu10.hana.ondemand.com/api/v1/chaincodes/4b3a1bd2-6db7-44be-945f-a1b85b946395-com-sap-icn-blockchain-example-helloWorld/37/id001',
        beforeSend: function(xhr) {
             xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vcDIwMDE3OTUwMzZ0cmlhbC5hdXRoZW50aWNhdGlvbi5ldTEwLmhhbmEub25kZW1hbmQuY29tL3Rva2VuX2tleXMiLCJraWQiOiJrZXktaWQtMSIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlMjZmMTg0OTNkN2U0NWEwOGNjMTc5YjNiMTgwODYzZSIsImV4dF9hdHRyIjp7ImVuaGFuY2VyIjoiWFNVQUEiLCJ6ZG4iOiJwMjAwMTc5NTAzNnRyaWFsIiwic2VydmljZWluc3RhbmNlaWQiOiI1OTllNjVhYy00MWI1LTQwMmYtODVkZi1iMTAwNGQ4ODA0ZDAifSwic3ViIjoic2ItNTk5ZTY1YWMtNDFiNS00MDJmLTg1ZGYtYjEwMDRkODgwNGQwIWIyNTU4MHxuYS00MjBhZGZjOS1mOTZlLTQwOTAtYTY1MC0wMzg2OTg4YjY3ZTAhYjE4MzYiLCJhdXRob3JpdGllcyI6WyJ1YWEucmVzb3VyY2UiXSwic2NvcGUiOlsidWFhLnJlc291cmNlIl0sImNsaWVudF9pZCI6InNiLTU5OWU2NWFjLTQxYjUtNDAyZi04NWRmLWIxMDA0ZDg4MDRkMCFiMjU1ODB8bmEtNDIwYWRmYzktZjk2ZS00MDkwLWE2NTAtMDM4Njk4OGI2N2UwIWIxODM2IiwiY2lkIjoic2ItNTk5ZTY1YWMtNDFiNS00MDJmLTg1ZGYtYjEwMDRkODgwNGQwIWIyNTU4MHxuYS00MjBhZGZjOS1mOTZlLTQwOTAtYTY1MC0wMzg2OTg4YjY3ZTAhYjE4MzYiLCJhenAiOiJzYi01OTllNjVhYy00MWI1LTQwMmYtODVkZi1iMTAwNGQ4ODA0ZDAhYjI1NTgwfG5hLTQyMGFkZmM5LWY5NmUtNDA5MC1hNjUwLTAzODY5ODhiNjdlMCFiMTgzNiIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMiLCJyZXZfc2lnIjoiZjI3ZDY5ZjMiLCJpYXQiOjE1NzEzMjAwMjksImV4cCI6MTU3MTM2MzIyOSwiaXNzIjoiaHR0cDovL3AyMDAxNzk1MDM2dHJpYWwubG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoiMDIwNzRmZDgtZTliYy00YjZmLTlmZjMtMzZiMDlkYmQ3NWIwIiwiYXVkIjpbInVhYSIsInNiLTU5OWU2NWFjLTQxYjUtNDAyZi04NWRmLWIxMDA0ZDg4MDRkMCFiMjU1ODB8bmEtNDIwYWRmYzktZjk2ZS00MDkwLWE2NTAtMDM4Njk4OGI2N2UwIWIxODM2Il19.mo-tHy0PB2LO_qW68UxxmjgVolTyzlIzj495j8Ymzdo-pywS9SXFLASLsZEWU6OsQBoWRX0ST2O-tLXf8vejckzrK_1H8913dsDgUkqhaYKjfTIC5B3XAocOxudSS4TbPEzlC4Ue2a8Xa0cPg_sJKaEUkHb_WUXS15WoE4mnIcMtINcQu5rBViDHNo3HFnXk4v0cI-aJEHjixISNzIqtUyvSK5tDU9ii5tSQ0uoxfnmeNsR4oCgRowo5TuMUwoFglpViLmVm_WxnGD1NYfL3G8caK3ls23CiIcXHFbF4RC6egWFiepdDwrNEihPIwMTgQ03MbV2-lR7Z3r-VgbHhslRAuAeRFjRDzdW0AC4zanKo-zDiBErZ1wq9A1ATNDuKWJxoHm-8TCc9k2aJNQ_rAfb_U_jTeRXSxP5Cm1yxFe2fH4ELtttgkM1Vyolo9KRZOLXfmTVPLfrWox_R5vKClg4W5f_3DVbyTNBS90WtM5bDTgSpSNN8utHKQbpYcWSBwaDxxCu1GkirE9j7U2DUZL7woF-6nyhIDGgPXIaCtvM-0ZgW6ZqIXZr8SYNdjTVVh6y-XulRks8UZs5bhrLm3WHjFU80sLPw9ofIuZhR1g7_FHCmoVddcDvwHDArs3ORr1-bLqJyVnxCDIOPR34DWcKgI-eUbQoWtLKbN3V7x_s")
        }, success: function(data){
            alert(data);
            //process the JSON data etc
        }
})