import styles from "./Frame.module.css";

const Frame = () => {
  return (
    <div className={styles.instanceParent}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
          <div className={styles.ellipseDiv} />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.instanceChild} />
          <div className={styles.avt}>
            <div className={styles.userpic} />
            <div className={styles.state} />
            <div className={styles.label}>VA</div>
          </div>
          <div className={styles.div}>1</div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <div className={styles.frameChild1} />
          <div className={styles.frameChild2} />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.instanceChild} />
          <div className={styles.avt}>
            <img className={styles.userpicIcon} alt="" src="/userpic@2x.png" />
            <div className={styles.state} />
            <div className={styles.label1}>VA</div>
          </div>
          <div className={styles.div}>2</div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild3} />
          <div className={styles.frameChild4} />
          <div className={styles.frameChild2} />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.instanceChild} />
          <div className={styles.avt}>
            <img className={styles.userpicIcon} alt="" src="/userpic1@2x.png" />
            <div className={styles.state} />
            <div className={styles.label1}>VA</div>
          </div>
          <div className={styles.div}>3</div>
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild3} />
          <div className={styles.frameChild7} />
          <div className={styles.frameChild2} />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.instanceChild} />
          <div className={styles.avt}>
            <img className={styles.userpicIcon} alt="" src="/userpic2@2x.png" />
            <div className={styles.state} />
            <div className={styles.label1}>VA</div>
          </div>
          <div className={styles.div}>4</div>
        </div>
      </div>
      <div className={styles.frameParent2}>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild9} />
          <div className={styles.frameChild10} />
          <div className={styles.frameChild2} />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.instanceChild} />
          <div className={styles.avt}>
            <div className={styles.userpic1} />
            <div className={styles.state} />
            <div className={styles.label}>NC</div>
          </div>
          <div className={styles.div}>5</div>
        </div>
      </div>
      <div className={styles.frameParent3}>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild9} />
          <div className={styles.frameChild13} />
          <div className={styles.frameChild2} />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.instanceChild} />
          <div className={styles.avt}>
            <img className={styles.userpicIcon} alt="" src="/userpic3@2x.png" />
            <div className={styles.state} />
            <div className={styles.label1}>VA</div>
          </div>
          <div className={styles.div}>6</div>
        </div>
      </div>
      <div className={styles.frameParent4}>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild9} />
          <div className={styles.frameChild16} />
          <div className={styles.frameChild2} />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.instanceChild} />
          <div className={styles.avt}>
            <div className={styles.userpic1} />
            <div className={styles.state} />
            <div className={styles.label}>HH</div>
          </div>
          <div className={styles.div}>7</div>
        </div>
      </div>
      <div className={styles.frameParent5}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
          <div className={styles.ellipseDiv} />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.instanceChild} />
          <div className={styles.avt}>
            <div className={styles.userpic3} />
            <div className={styles.state} />
            <div className={styles.label7}>MA</div>
          </div>
          <div className={styles.div}>8</div>
        </div>
      </div>
      <div className={styles.frameParent6}>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <div className={styles.frameChild1} />
          <div className={styles.frameChild2} />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.instanceChild} />
          <div className={styles.avt}>
            <img className={styles.userpicIcon} alt="" src="/userpic4@2x.png" />
            <div className={styles.state} />
            <div className={styles.label1}>VA</div>
          </div>
          <div className={styles.div}>9</div>
        </div>
      </div>
      <div className={styles.frameParent4}>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild3} />
          <div className={styles.frameChild4} />
          <div className={styles.frameChild2} />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.instanceChild} />
          <div className={styles.avt9}>
            <div className={styles.userpic} />
            <div className={styles.state} />
            <div className={styles.label}>VA</div>
          </div>
          <div className={styles.div9}>10</div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
