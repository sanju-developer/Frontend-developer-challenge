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
                    'date': '2021-05-18T04:00:00.000Z',
                    'name': 'MORTAL KOMBAT',
                    'region': 'US',
                    'createdOn': 1559807714999,
                    'price': 'Price info of MORTAL KOMBAT',
                    'csv': 'Some CSV link for MORTAL KOMBAT',
                    'report': 'Some report link for MORTAL KOMBAT',
                    'image_url': img1
                },
                {
                    'id': 'bs2',
                    'date': '2021-07-08T04:00:00.000Z',
                    'name': 'Auto Chess',
                    'region': 'CA, FR',
                    'createdOn': 1559806715124,
                    'price': 'Price info of Auto Chess',
                    'csv': 'Some CSV link for Auto Chess',
                    'report': 'Some report link for Auto Chess Ques',
                    'image_url': img2
                },
                {
                    'id': 'bs3',
                    'date': '2021-08-28T04:00:00.000Z',
                    'name': 'Garena Free Fire',
                    'region': 'FR',
                    'createdOn': 1559806711124,
                    'price': 'Price info of Garena Free Fire',
                    'csv': 'Some CSV link for Garena Free Fire',
                    'report': 'Some report link for Garena Free Fire',
                    'image_url': img3
                },
                {
                    'id': 'bs4',
                    'date': '2021-05-25T04:00:00.000Z',
                    'name': 'Shadow Fight 3',
                    'region': 'JP',
                    'createdOn': 1559806680124,
                    'price': 'Price info of Shadow Fight 3',
                    'csv': 'Some CSV link for Shadow Fight 3',
                    'report': 'Some report link for Shadow Fight 3',
                    'image_url': img4
                },
                {
                    'id': 'bs5',
                    'date': '2021-07-20T04:00:00.000Z',
                    'name': 'Need for Speed™ No Limits',
                    'region': 'JP',
                    'createdOn': 1559806680124,
                    'price': 'Price info of Need for Speed™ No Limits',
                    'csv': 'Some CSV link for Need for Speed™ No Limits',
                    'report': 'Some report link for Need for Speed™ No Limits',
                    'image_url': img5
                },
                {
                    'id': 'bs6',
                    'date': '2021-07-21T04:00:00.000Z',
                    'name': 'Summoners War',
                    'region': 'JP',
                    'createdOn': 1559806680124,
                    'price': 'Price info of Summoners War',
                    'csv': 'Some CSV link for Summoners War',
                    'report': 'Some report link for Summoners War',
                    'image_url': img6
                },
                {
                    'id': 'bs7',
                    'date': '2022-07-20T04:00:00.000Z',
                    'name': 'Flow Free',
                    'region': 'JP',
                    'createdOn': 1559806680124,
                    'price': 'Price info of Mancala Mix',
                    'csv': 'Some CSV link for Mancala Mix',
                    'report': 'Some report link for Mancala Mix',
                    'image_url': img7
                },
                {
                    'id': 'bs8',
                    'date': '2022-02-20T04:00:00.000Z',
                    'name': 'PUBG MOBILE',
                    'region': 'JP',
                    'createdOn': 1559806680124,
                    'price': 'Price info of Mancala Mix',
                    'csv': 'Some CSV link for Mancala Mix',
                    'report': 'Some report link for Mancala Mix',
                    'image_url': img8
                }
                ]
            })
        }, 500)
    })
}