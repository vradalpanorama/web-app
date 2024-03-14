import cl from "classnames";
import style from "./index.module.scss";
import Image from "next/image";
import { ReadMore, Title } from "@/components";
import Link from "next/link";
import { useParams } from "next/navigation";

const GalleryMain = ({
    prevPhoto,
    activePhoto,
    nextPhoto,
    dictionary,
    indexActiveImage,
    className,
}) => {
    const params = useParams();
    return (
        <div className={cl(className, style.mainPhoto)}>
            {prevPhoto && (
                <Image
                    className={style.mainPhotoImagePrev}
                    placeholder="blur"
                    blurDataURL={prevPhoto.blurDataURL}
                    src={prevPhoto}
                    alt={""}
                />
            )}
            <Image
                className={style.mainPhotoImage}
                src={activePhoto}
                alt={""}
            />
            {nextPhoto && (
                <Image
                    className={style.mainPhotoImageNext}
                    src={nextPhoto}
                    alt={""}
                />
            )}
            <div className={style.mainPhotoInformation}>
                <div className={style.mainPhotoInformationText}>
                    {/* Link href={`/${params.lang}/accommodation/${dictionary["accommodation"][indexActiveImage]['slug']}`} */}
                    <Title
                        type={"SectionSpanWhite"}
                        className={style.mainPhotoInformationTextColor}
                    >
                        {
                            dictionary["menuNavigation"]["accommodation"][
                                "sectionName"
                            ]
                        }
                    </Title>
                    <Title>
                        {
                            dictionary["accommodation"][indexActiveImage][
                                "preview"
                            ]["title"]
                        }
                    </Title>
                    <p>
                        {
                            dictionary["accommodation"][indexActiveImage][
                                "preview"
                            ]["lead"]
                        }
                    </p>
                    <Link
                        href={`/${params.lang}/accommodation/${dictionary["accommodation"][indexActiveImage]["slug"]}`}
                    >
                        <ReadMore
                            isWhite={true}
                            className={style.mainPhotoInformationTextColor}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GalleryMain;
