import img1 from '../assets/Bitmap.png'
import img2 from '../assets/Bitmap2.png'
import img3 from '../assets/Bitmap3.png'
import img4 from '../assets/Bitmap4.png'
import img5 from '../assets/Bitmap5.png'
import img6 from '../assets/Bitmap6.png'
import img7 from '../assets/Bitmap7.png'
import img8 from '../assets/Bitmap8.png'

export const getCampaignsDataService = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res({
                'data': [{
                    'id': 'bs1',
                    'date': '2021-02-16T18:42:26.771Z',
                    'name': 'MORTAL KOMBAT',
                    'region': 'US',
                    'createdOn': 1559807714999,
                    'price': 'Price info of MORTAL KOMBAT',
                    'csv': 'Some CSV link for MORTAL KOMBAT',
                    'report': 'Some report link for MORTAL KOMBAT',
                    'image_url': img1,
                    'Onew1m': '$ 100.00',
                    'Sixm': '$ 500.00',
                    'Oney': '$ 900.00'
                },
                {
                    'id': 'bs2',
                    'date': '2019-08-07T18:30:00.000Z',
                    'name': 'Auto Chess',
                    'region': 'CA, FR',
                    'createdOn': 1559806715124,
                    'price': 'Price info of Auto Chess',
                    'csv': 'Some CSV link for Auto Chess',
                    'report': 'Some report link for Auto Chess Ques',
                    'image_url': img2,
                    'Onew1m': '$ 200.00',
                    'Sixm': '$ 1000.00',
                    'Oney': '$ 2000.00'
                },
                {
                    'id': 'bs3',
                    'date': '2021-02-13T18:42:26.771Z',
                    'name': 'Garena Free Fire',
                    'region': 'FR',
                    'createdOn': 1559806711124,
                    'price': 'Price info of Garena Free Fire',
                    'csv': 'Some CSV link for Garena Free Fire',
                    'report': 'Some report link for Garena Free Fire',
                    'image_url': img3,
                    'Onew1m': '$ 150.00',
                    'Sixm': '$ 700.00',
                    'Oney': '$ 950.00'
                },
                {
                    'id': 'bs4',
                    'date': '2021-06-23T18:30:00.000Z',
                    'name': 'Shadow Fight 3',
                    'region': 'JP',
                    'createdOn': 1559806680124,
                    'price': 'Price info of Shadow Fight 3',
                    'csv': 'Some CSV link for Shadow Fight 3',
                    'report': 'Some report link for Shadow Fight 3',
                    'image_url': img4,
                    'Onew1m': '$ 300.00',
                    'Sixm': '$ 600.00',
                    'Oney': '$ 1000.00'
                },
                {
                    'id': 'bs5',
                    'date': '2019-08-19T18:30:00.000Z',
                    'name': 'Need for Speed™ No Limits',
                    'region': 'JP',
                    'createdOn': 1559806680124,
                    'price': 'Price info of Need for Speed™ No Limits',
                    'csv': 'Some CSV link for Need for Speed™ No Limits',
                    'report': 'Some report link for Need for Speed™ No Limits',
                    'image_url': img5,
                    'Onew1m': '$ 400.00',
                    'Sixm': '$ 800.00',
                    'Oney': '$ 1200.00'
                },
                {
                    'id': 'bs6',
                    'date': '2021-07-20T18:30:00.000Z',
                    'name': 'Summoners War',
                    'region': 'JP',
                    'createdOn': 1559806680124,
                    'price': 'Price info of Summoners War',
                    'csv': 'Some CSV link for Summoners War',
                    'report': 'Some report link for Summoners War',
                    'image_url': img6,
                    'Onew1m': '$ 300.00',
                    'Sixm': '$ 600.00',
                    'Oney': '$ 1300.00'
                },
                {
                    'id': 'bs7',
                    'date': '2022-07-19T18:30:00.000Z',
                    'name': 'Flow Free',
                    'region': 'JP',
                    'createdOn': 1559806680124,
                    'price': 'Price info of Mancala Mix',
                    'csv': 'Some CSV link for Mancala Mix',
                    'report': 'Some report link for Mancala Mix',
                    'image_url': img7,
                    'Onew1m': '$ 400.00',
                    'Sixm': '$ 800.00',
                    'Oney': '$ 2000.00'
                },
                {
                    'id': 'bs8',
                    'date': '2022-03-19T18:30:00.000Z',
                    'name': 'PUBG MOBILE',
                    'region': 'JP',
                    'createdOn': 1559806680124,
                    'price': 'Price info of Mancala Mix',
                    'csv': 'Some CSV link for Mancala Mix',
                    'report': 'Some report link for Mancala Mix',
                    'image_url': img8,
                    'Onew1m': '$ 900.00',
                    'Sixm': '$ 1800.00',
                    'Oney': '$ 2500.00'
                }
                ]
            })
        }, 500)
    })
}