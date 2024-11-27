import type { Schema, Struct } from '@strapi/strapi';

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedDynamicZone extends Struct.ComponentSchema {
  collectionName: 'components_shared_dynamic_zones';
  info: {
    description: '';
    displayName: 'dynamic_zone';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon_or_image: Schema.Attribute.Media<'images'>;
    images: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedExperienceContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_experience_contents';
  info: {
    displayName: 'experience_content';
  };
  attributes: {
    experience_item: Schema.Attribute.Component<'shared.experience-item', true>;
  };
}

export interface SharedExperienceItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_experience_items';
  info: {
    description: '';
    displayName: 'experience_item';
  };
  attributes: {
    company: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    from_date: Schema.Attribute.Date;
    logo: Schema.Attribute.Media<'images'>;
    role: Schema.Attribute.String & Schema.Attribute.Required;
    to_date: Schema.Attribute.Date;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_items';
  info: {
    description: '';
    displayName: 'menu_item';
  };
  attributes: {
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_sections';
  info: {
    description: '';
    displayName: 'Section';
  };
  attributes: {
    bg_color: Schema.Attribute.String;
    bg_image: Schema.Attribute.Media<'images'>;
    buttons: Schema.Attribute.Component<'shared.button', true>;
    description: Schema.Attribute.Blocks;
    experience: Schema.Attribute.Component<'shared.experience-content', false>;
    heading: Schema.Attribute.String;
    section_name: Schema.Attribute.String & Schema.Attribute.Required;
    slider_images: Schema.Attribute.Media<'images', true>;
    sub_heading: Schema.Attribute.String;
    sub_section: Schema.Attribute.Component<'shared.dynamic-zone', true>;
    thumbnail: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.button': SharedButton;
      'shared.dynamic-zone': SharedDynamicZone;
      'shared.experience-content': SharedExperienceContent;
      'shared.experience-item': SharedExperienceItem;
      'shared.media': SharedMedia;
      'shared.menu-item': SharedMenuItem;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.section': SharedSection;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
