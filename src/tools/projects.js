import project1_mini from '../images/project1_mini.jpg'
import project1_img1 from '../images/project1_img1.jpg'
import project1_img2 from '../images/project1_img2.jpg'
import project2_mini from '../images/project2_mini.jpg'
import project2_img1 from '../images/project2_img1.jpg'
import project2_img2 from '../images/project2_img2.jpg'
import project2_img3 from '../images/project2_img3.jpg'
import project2_img4 from '../images/project2_img4.jpg'

export const projects = [
    {
        clickableImage: project1_mini,
        client: 'E&B Solutions',
        date: 'July 2016',
        images: [
            { src: project1_img1, alt: 'Screenshot 1' },
            { src: project1_img2, alt: 'Screenshot 2' }
        ],
        information: 'Created a responsive website from scratch and hosted in the cloud.',
        name: 'Website Design'
    },
    {
        clickableImage: project2_mini,
        client: 'Valley Love Organic',
        date: 'September 2016',
        images: [
            { src: project2_img1, alt: 'Screenshot 1' },
            { src: project2_img2, alt: 'Scrrenshot 2' },
            { src: project2_img3, alt: '2016 Metrics' },
            { src: project2_img4, alt: '2017 Metrics' }
        ],
        information: `Using GoDaddy\'s WebSite builder, updated the existing site to use a newer and responsive theme.`,
        informationCont: `Added new pages for new services offered by client. Client\'s site traffic increased significantly once they could promote their redesigned site.`,
        name: 'Website Modification'
    }
]