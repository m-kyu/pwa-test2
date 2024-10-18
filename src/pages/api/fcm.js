// api > fcm.js
import admin from 'firebase-admin';


export default async function handler(req, res) {
    
    const serviceAccount = {
        projectId:'test-a0926',
        privateKey:'-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCqKYoGeHYLbgrQ\nJKeuG6j6V9N7aRr8Xb7xZrPRFBVYllsZ/KwyPdKta1LlcS/ZZxw7lKsb/YkJf+ii\nZB0fRxoE+p0uUWoxJaaYMG2M0XTJkiUO5uHOb08X/NQ/BUTut4RRNVuNBiuSLdmB\noXpgW1aAJRhTCVBZRO4PnG5K16DQl9iWJT75Hb0Q2els7j4SC7+6EIYxqElNti95\nutxWwyU7EqmsmX6VHb+IrRu9mEFItoSgqj/NHprgKGcapIVX+vz9AJAFYd4O4sv2\nSS0GULUWrcYl54ft1seOAzsaiTV88MHwTS4iliZCJNGvqt4c+uD8wq8nJsveCIpd\nxA8Zt6abAgMBAAECggEADF/k979+5inkg2qG/zRnv3zvlkP4gG3Y2vlbDlNlkgGt\nMmCbrTOtxIrPhnwKvMaw2Oxg3TI86wHwSw74xzOGguIu2BV3oYdZbCvpa5o34gjM\nxR6pQTf7CoWKceLSNoIGD1nQBJt0Q7ct4C18FtHNopgQAsnkm/lVTrFTnAG+Yizq\nKfBHukCQsZRDt+psik2drilLxKPa2k9HPBFugNwAATHCBUlWRgQKTInCrpQ4QnbW\n+14uco8kU8Rglozg1ktfauiw+J1b2hT4H/7xLGW8isMKBmSOAfABuGAxo0NtLWy5\n7KBaPbUvHlCdsuzBaQwxfCHwwKHd3bfWHRTnI9WYwQKBgQDtSLmlb0+Erf8Hy5rB\nXggcKg3SJUhKjl4OUXFko+hcDDBRdKuXazCQHiPqQXVr9rg2Q+Qop0kgNTo044iS\njAq5uDBQI60XS/8gUQAgZym2Y0hWiHUiiOEYqbVsa5cyg/xHdEpKX5ZCceiw+lT4\n5S2R3m3L8VVqRIl5xBw9xvMBkQKBgQC3lXr61tC/ajdOjVZBeLSuNbgLf3NAe/ro\nJf7GUe2KDxkswvmi3+Rb97FOQdyjVGe462ALSn0gRbIgApsRdTuxQnG4POT8gVB7\nydxgjuHC1jmrspQ22g4WbnXgi6blYli+Tlb1e+nSpuO2zzOAI6B7rvXEPYT5M8dD\n5rvlDOaPawKBgAZvD2GV+BD/6sdaVPLjStMArOlCy4gB/jjjKnDxJM7CIdlDkZeE\nd4eg2ZZzeeyYfvwxsRENICV4bACdHsnidDP+84hovzu/esZ0i81VHsNsQ7zc7Fgo\nX/ocN+gdrrbW71M8qvsDRn68ufN6hi1NgYPQBSgffhJok1Wy5JUkPNiRAoGBAJRY\n6D2WJKzoybRiJZdWULqNkiFIZftvs/qv6UacoZR0SuWO0Ga7AS8H4nDYa9BXvlEB\ncmTtVlsjtqKDOIdM8mV0yawVGPyqCj1diwVDsE7fCU8jSP1iCww5SmuerciiRg/S\nAhbwgKvGTDBHEtiy8VXAtbxT8gXlv1mxM5gNaqntAoGBALUSZSCeEptu9Jn0LRck\nxZO00nqv84D/DC1qFQrHb4huACBdVUH+26paYv08PfUNpXbS1vf2eioel3+nOUpU\nYwouDtAfRyrLLijIvbeunqQwSl9Ckg8Ji+qqI2eS0XfyEcvxqwKwTwKPK0LFJLxY\nsYSKcPd+nJDda/Nz5XOq1yuv\n-----END PRIVATE KEY-----\n',
        clientEmail:'firebase-adminsdk-ufbir@test-a0926.iam.gserviceaccount.com'
    }
    if (!admin.apps.length) {
        admin.initializeApp(
            {credential:admin.credential.cert(serviceAccount)}
        );
    }

    const msg = await admin.messaging().send(req.body);

    res.status(200).send('FCM 메세지 발송 완료!...');
};