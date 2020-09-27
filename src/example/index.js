/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import {
    encodeData,
    renderer25D,
    rendererBase,
    rendererDSJ,
    rendererRandRect,
    rendererImage,
    rendererResImage,
    rendererCircle,
    rendererFuncA,
    rendererFuncB,
    rendererLine,
    rendererLine2,
} from '@/index';
import {
    defaultResImage,
    QRBTF_URL,
    defaultImage,
} from '@/constant/References';
import '@/style/base.css';

import Rem from '@/images/Rem.jpg';

window.onload = () => {
    const qrcode = encodeData({
        text: QRBTF_URL,
        correctLevel: 0,
    });
    const A1 = rendererBase(qrcode);
    // const sp1 = rendererDSJ(qrcode);
    // const sp2 = rendererRandRect(qrcode);
    // const B1 = renderer25D(qrcode);
    // const C1 = rendererImage(qrcode, {
    //     backgroudImage: Rem,
    // });
    const A_a1 = rendererLine(qrcode, {
        type: 0
    });
    const A_a2 = rendererLine2(qrcode, {
        type: 3
    });
    // const A_b1 = rendererFuncA(qrcode, {
    //     size: 1,
    //     otherColor2: 'red'
    // });
    // const A_b2 = rendererFuncB(qrcode, {
    //     size: 0,
        
    // });
    const SP_3 = rendererCircle(qrcode);
    // rendererResImage(qrcode, { backgroudImage: defaultResImage }).then(
    //     (res) => {
    //         document.querySelector('.c2').innerHTML = res;
    //     }
    // );

    window.document.body.innerHTML = `<ul>
    <li>${A_a1}</li>
    <li>${A_a2}</li>

    </ul>`;
};
