import BulletedListItem from "@/components/BulletedListItem";
import BulletedListWrapper from "@/components/BulletedListWrapper";
import HeadingText from "@/components/HeadingText";
import LinkText from "@/components/LinkText";
import PageContentWrapper from "@/components/PageContentWrapper";
import SectionWrapper from "@/components/SectionWrapper";
import StandardText from "@/components/StandardText";
import { projects } from "@/lib/constants";
import slugify from "slugify";

export default function Projects() {
  return (
    <PageContentWrapper>
      {projects.map((project) => (
        <SectionWrapper
          props={{ id: slugify(project.title, { lower: true }) }}
          key={project.title}
        >
          <LinkText
            isNativeAnchor
            href={project.links[0].href}
            anchorProps={{ target: "_blank", referrerPolicy: "no-referrer" }}
          >
            {project.title}
          </LinkText>
          <StandardText>{project.description}</StandardText>
          {project.details.map((detail) => (
            <div key={detail.title} className="flex flex-col gap-[15px]">
              <div className="font-bold">
                <StandardText variant={1}>{detail.title}</StandardText>
              </div>
              <BulletedListWrapper>
                {detail.items.map((item) => (
                  <BulletedListItem key={item}>{item}</BulletedListItem>
                ))}
              </BulletedListWrapper>
            </div>
          ))}
          <div className="flex flex-col gap-[15px]">
            <div className="font-bold">
              <StandardText variant={1}>Links</StandardText>
            </div>
            <BulletedListWrapper>
              {project.links.map((link) => (
                <BulletedListItem key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="underline"
                  >
                    {link.text}
                  </a>
                </BulletedListItem>
              ))}
            </BulletedListWrapper>
          </div>
        </SectionWrapper>
      ))}
    </PageContentWrapper>
  );
}
