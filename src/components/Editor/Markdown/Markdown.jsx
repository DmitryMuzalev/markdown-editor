import { useMediaQuery } from 'react-responsive';
import styles from './Markdown.module.scss';

function Markdown({ cb }) {
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className={styles.markdown}>
      Markdown
      <br />
      <br />
      {isTablet && <button onClick={cb}>Click</button>}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic repellat
        laborum ipsa quia recusandae maiores dolorem laudantium obcaecati nisi
        ratione. Autem perferendis mollitia, amet ducimus earum delectus ea
        suscipit eveniet aspernatur voluptas veniam consequuntur culpa similique
        facilis, nemo, iste iusto nostrum? Veritatis nemo vero tempora harum
        recusandae velit, consectetur animi voluptas magnam incidunt consequatur
        dolore quia atque veniam, quas laudantium iusto? Odit ullam maxime ea
        hic odio vel eveniet, ratione earum magnam tempora placeat blanditiis
        debitis dolorum ipsa maiores est non iusto vero consequuntur alias
        nostrum veniam dicta perferendis! Facere deleniti iusto vero! Velit
        itaque, minima voluptas ipsa nesciunt harum deleniti asperiores! Eius
        dicta esse odio eos reprehenderit debitis ea unde magni commodi vero.
        Error deserunt non, id excepturi libero qui. Autem maiores nesciunt
        reiciendis voluptatem delectus blanditiis totam obcaecati provident
        commodi maxime cum optio voluptate error iste cupiditate consequuntur
        corrupti exercitationem deleniti numquam, placeat neque distinctio a
        ipsam non? Optio sint dolores praesentium, omnis incidunt ducimus
        numquam tempore impedit. Neque voluptatum quisquam autem ea, iure sed
        illum doloribus rem nihil quo nam, nisi, fugit accusamus porro quibusdam
        velit eveniet consequuntur ad doloremque fuga a illo unde nostrum. Eum
        dignissimos obcaecati rerum hic illo porro, explicabo ipsa accusamus
        dolorem quos quis magnam expedita, odit delectus corporis id aut cumque
        sunt optio beatae mollitia officia a? Odio molestias asperiores, illo
        neque et accusamus eum aut at non quis eaque soluta illum incidunt in
        qui nesciunt inventore cupiditate labore veritatis provident fugit
        ducimus, magni, suscipit sapiente. Ex animi eveniet quia reprehenderit
        minima laudantium earum, corporis quae, provident modi libero
        repudiandae repellat ea impedit beatae exercitationem at esse! Vero
        maiores hic assumenda suscipit doloribus iste, eos quisquam molestiae
        quia officiis perferendis laudantium minus quidem nesciunt officia
        dolorem! Reprehenderit consequuntur aperiam ipsam aliquid earum dolor,
        voluptate est deleniti minima asperiores quod ipsum suscipit cupiditate,
        voluptates voluptas? Fuga, laborum aperiam. Quae quis amet dolore
        officiis? Quidem deserunt quibusdam facilis ut officia nemo! Similique
        nisi illum vel. Eaque impedit voluptates accusamus! Commodi, incidunt
        voluptatibus veniam voluptate esse saepe, aperiam ratione sequi nulla
        officia, magni consequuntur. Exercitationem iste corrupti deleniti
        cumque amet mollitia nihil quod, porro cum quam modi dignissimos? Quod
        consequatur culpa dolorem saepe in magnam soluta, autem aliquam,
        architecto, adipisci beatae a explicabo nemo dicta repudiandae fugit
        enim accusamus et praesentium at voluptas. Quasi sed ex aut perferendis
        placeat alias vero. Assumenda temporibus, nobis qui, a perspiciatis
        officia omnis culpa ratione architecto earum illum, delectus facere
        ullam et corrupti inventore. Placeat quaerat voluptatem doloremque iure
        modi ratione velit quibusdam blanditiis? Ipsam, corporis praesentium!
        Aut eligendi odio quae dolorum earum inventore molestias, iure
        provident. Adipisci non facilis commodi, eaque eum ut ipsum itaque
        tempore perspiciatis iste consequatur reprehenderit suscipit architecto
        maxime quibusdam sunt vel et odit nam aperiam. Nisi non veritatis aut
        doloremque deserunt explicabo quae aperiam dolor quis nulla mollitia,
        quia officiis eveniet, hic soluta laudantium quos a reprehenderit
        distinctio. Ullam voluptate delectus officia earum facere, suscipit
        aliquam repellendus necessitatibus neque facilis veritatis. Possimus
        doloribus aut harum officia eos quidem reiciendis recusandae, veniam
        reprehenderit placeat quibusdam fugiat commodi corporis vero. Eveniet
        excepturi facilis numquam aperiam sequi, ex neque rerum itaque amet
        similique ipsa iste ipsam optio minima officia odit voluptas quidem
        laboriosam veritatis explicabo reprehenderit libero. Officiis, voluptas
        maxime? Autem dicta tempore rem nostrum, possimus, labore voluptate
        rerum repudiandae dolores corrupti deserunt beatae perferendis sed,
        impedit veniam distinctio animi sapiente debitis fuga maxime iusto. Quo
        quibusdam sunt rem officia expedita minus dolor tempore fuga non
        ratione! Iure tempore, sequi dolores odio impedit rem voluptatem?
        Numquam deleniti, nihil quibusdam, repellendus asperiores mollitia
        nostrum culpa, maiores eos voluptatum eaque aliquam esse ut soluta
        incidunt ullam inventore molestias! Fugiat quis molestias ut! Illum,
        rerum cumque repellendus labore eius nostrum sint ab architecto
        blanditiis quas officia quibusdam molestias saepe, dicta earum mollitia
        maxime maiores fugit vel? Illum quasi voluptate veritatis et tenetur,
        pariatur possimus nisi? Commodi non velit perspiciatis dicta? Doloribus
        hic, dicta fugit nobis perferendis exercitationem incidunt autem odit,
        quia maxime libero praesentium, deserunt odio accusantium excepturi!
        Cupiditate ipsam eum at, necessitatibus excepturi, facere accusantium
        quibusdam repellendus qui doloribus quae! Fugiat architecto accusamus
        aliquam culpa unde eveniet amet distinctio? Voluptatum, praesentium. Vel
        illum aspernatur illo autem, atque similique mollitia delectus aut, eum
        qui laudantium voluptatibus repudiandae inventore neque.
      </p>
    </div>
  );
}
export { Markdown };
