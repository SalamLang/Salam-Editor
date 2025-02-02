const result = {
  items: [
    {
      generate_name: "width",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_WIDTH",
      reserved_values: "",
      text: {
        en: ["width"],
        fa: ["عرض"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "height",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_HEIGHT",
      reserved_values: "",
      text: {
        en: ["height"],
        fa: ["ارتفاع"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "accent-color",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_ACCENT_COLOR",
      reserved_values: "",
      text: {
        en: ["accent-color"],
        fa: ["رنگ برجسته"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_COLOR",
    },
    {
      generate_name: "appearance",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_APPEARANCE",
      reserved_values: "ast_layout_allowed_style_list_appearance",
      text: {
        en: ["appearance"],
        fa: ["ظاهر"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "aspect-ratio",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_ASPECT_RATIO",
      reserved_values: "ast_layout_allowed_style_list_aspect_ratio",
      text: {
        en: ["aspect-ratio"],
        fa: ["نسبت ابعاد"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "backdrop-filter",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BACKDROP_FILTER",
      reserved_values: "",
      text: {
        en: ["backdrop-filter"],
        fa: ["فیلتر پس‌زمینه", "فیلتر پس زمینه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING_ANY",
    },
    {
      generate_name: "backface-visibility",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BACKFACE_VISIBILITY",
      reserved_values: "ast_layout_allowed_style_list_backface_visibility",
      text: {
        en: ["backface-visibility"],
        fa: [
          "مشاهده‌پذیری پشت‌نما",
          "مشاهده پذیری پشت‌نما",
          "مشاهده پذیری پشت نما",
        ],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "block-size",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BLOCK_SIZE",
      reserved_values: "ast_layout_allowed_style_list_block_size",
      text: {
        en: ["block-size"],
        fa: ["اندازه بلوک"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "background-image",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BACKGROUND_IMAGE",
      reserved_values: "ast_layout_allowed_style_list_background_image",
      text: {
        en: ["background-image"],
        fa: ["تصویر پس‌زمینه", "تصویر پس‌ زمینه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING_ANY",
    },
    {
      generate_name: "background-attachment",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BACKGROUND_ATTACHMENT",
      reserved_values: "ast_layout_allowed_style_list_background_attachment",
      text: {
        en: ["background-attachment"],
        fa: ["پیوست تصویر پس‌زمینه", "پیوست تصویر پس‌ زمینه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "background-blend-mode",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BACKGROUND_BLEND_MODE",
      reserved_values: "ast_layout_allowed_style_list_background_blend_mode",
      text: {
        en: ["background-blend-mode"],
        fa: ["حالت ترکیب پس‌زمینه", "حالت ترکیب پس زمینه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "background-clip",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BACKGROUND_CLIP",
      reserved_values: "ast_layout_allowed_style_list_background_clip",
      text: {
        en: ["background-clip"],
        fa: ["برش پس‌زمینه", "برش پس زمینه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "background-color",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BACKGROUND_COLOR",
      reserved_values: "ast_layout_allowed_style_list_background_clip",
      text: {
        en: ["background-color"],
        fa: ["رنگ پس‌زمینه", "رنگ پس زمینه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_COLOR",
    },
    {
      generate_name: "background-origin",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BACKGROUND_ORIGIN",
      reserved_values: "ast_layout_allowed_style_list_background_origin",
      text: {
        en: ["background-origin"],
        fa: ["مبدا پس‌زمینه", "مبدا پس زمینه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "flex-basis",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_FLEX_BASIS",
      reserved_values: "ast_layout_allowed_style_list_flex_basis",
      text: {
        en: ["flex-basis"],
        fa: ["مبنای انعطاف"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING_ANY",
    },
    {
      generate_name: "background-position",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BACKGROUND_POSITION",
      reserved_values: "ast_layout_allowed_style_list_background_position_x",
      text: {
        en: ["background-position"],
        fa: ["موقعیت پس‌زمینه", "موقعیت پس‌ زمینه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING_ANY",
    },
    {
      generate_name: "background-position-x",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BACKGROUND_POSITION_X",
      reserved_values: "ast_layout_allowed_style_list_background_position_x",
      text: {
        en: ["background-position-x"],
        fa: ["موقعیت افقی پس‌زمینه", "موقعیت افقی پس‌ زمینه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING_ANY",
    },
    {
      generate_name: "background-position-y",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BACKGROUND_POSITION_Y",
      reserved_values: "ast_layout_allowed_style_list_background_position_x",
      text: {
        en: ["background-position-y"],
        fa: ["موقعیت عمودی پس‌زمینه", "موقعیت عمودی پس‌ زمینه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING_ANY",
    },
    {
      generate_name: "background-repeat",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BACKGROUND_REPEAT",
      reserved_values: "ast_layout_allowed_style_list_background_repeat",
      text: {
        en: ["background-repeat"],
        fa: ["تکرار پس‌زمینه", "تکرار پس‌ زمینه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING_ANY",
    },
    {
      generate_name: "background-size",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BACKGROUND_SIZE",
      reserved_values: "ast_layout_allowed_style_list_background_size",
      text: {
        en: ["background-size"],
        fa: ["اندازه پس‌زمینه", "اندازه پس‌ زمینه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING_ANY",
    },
    {
      generate_name: "border-radius",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_RADIUS",
      reserved_values: "",
      text: {
        en: ["border-radius"],
        fa: ["گردی"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZES124",
    },
    {
      generate_name: "border",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER",
      reserved_values: "",
      text: {
        en: ["border"],
        fa: ["مرز"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING_ANY",
    },
    {
      generate_name: "border-block-end-color",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_BLOCK_END_COLOR",
      reserved_values: "",
      text: {
        en: ["border-block-end-color"],
        fa: ["رنگ مرز انتهایی بلوک"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_COLOR",
    },
    {
      generate_name: "border-block-end-style",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_BLOCK_END_STYLE",
      reserved_values: "ast_layout_allowed_style_list_border_block_end_style",
      text: {
        en: ["border-block-end-style"],
        fa: ["سبک مرز انتهایی بلوک"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "border-block-end-width",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_BLOCK_END_WIDTH",
      reserved_values: "ast_layout_allowed_style_list_border_block_end_style",
      text: {
        en: ["border-block-end-width"],
        fa: ["عرض مرز انتهایی بلوک"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "border-block-start-color",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_BLOCK_START_COLOR",
      reserved_values: "",
      text: {
        en: ["border-block-start-color"],
        fa: ["رنگ مرز ابتدایی بلوک"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_COLOR",
    },
    {
      generate_name: "border-block-start-style",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_BLOCK_START_STYLE",
      reserved_values: "ast_layout_allowed_style_list_border_block_start_style",
      text: {
        en: ["border-block-start-style"],
        fa: ["رنگ مرز ابتدایی بلوک"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "border-block-start-width",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_BLOCK_START_WIDTH",
      reserved_values: "ast_layout_allowed_style_list_border_block_start_style",
      text: {
        en: ["border-block-start-width"],
        fa: ["عرض مرز ابتدایی بلوک"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "border-bottom-color",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_BOTTOM_COLOR",
      reserved_values: "ast_layout_allowed_style_list_border_block_start_style",
      text: {
        en: ["border-bottom-color"],
        fa: ["رنگ مرز پایین"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_COLOR",
    },
    {
      generate_name: "border-bottom-left-radius",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_BOTTOM_LEFT_RADIUS",
      reserved_values: "",
      text: {
        en: ["border-bottom-left-radius"],
        fa: ["گردی پایین چپ"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "border-bottom-right-radius",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_BOTTOM_RIGHT_RADIUS",
      reserved_values: "",
      text: {
        en: ["border-bottom-right-radius"],
        fa: ["گردی پایین راست"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "border-bottom-style",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_BOTTOM_STYLE",
      reserved_values: "ast_layout_allowed_style_list_border_bottom_style",
      text: {
        en: ["border-bottom-style"],
        fa: ["سبک مرز پایین"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "border-bottom-width",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_BOTTOM_WIDTH",
      reserved_values: "ast_layout_allowed_style_list_border_bottom_style",
      text: {
        en: ["border-bottom-width"],
        fa: ["عرض مرز پایین"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "border-collapse",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_COLLAPSE",
      reserved_values: "ast_layout_allowed_style_list_border_collapse",
      text: {
        en: ["border-collapse"],
        fa: ["ادغام مرز", "ادغام مرز ها", "ادغام مرزها"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "border-end-end-radius",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_END_END_RADIUS",
      reserved_values: "",
      text: {
        en: ["border-end-end-radius"],
        fa: ["گردی انتها"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "border-end-start-radius",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_END_START_RADIUS",
      reserved_values: "",
      text: {
        en: ["border-end-start-radius"],
        fa: ["گردی شروع"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "border-image-outset",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_IMAGE_OUTSET",
      reserved_values: "",
      text: {
        en: ["border-image-outset"],
        fa: ["برآمدگی تصویر مرز"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "border-image-repeat",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_IMAGE_REPEAT",
      reserved_values: "ast_layout_allowed_style_list_border_image_repeat",
      text: {
        en: ["border-image-repeat"],
        fa: ["تکرار تصویر مرز"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "border-image-slice",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_IMAGE_SLICE",
      reserved_values: "",
      text: {
        en: ["border-image-slice"],
        fa: ["برش تصویر مرز"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_NUMBER",
    },
    {
      generate_name: "border-image-source",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_IMAGE_SOURCE",
      reserved_values: "ast_layout_allowed_style_list_border_image_source",
      text: {
        en: ["border-image-source"],
        fa: ["منبع تصویر مرز"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "border-image-width",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_IMAGE_WIDTH",
      reserved_values: "ast_layout_allowed_style_list_border_image_width",
      text: {
        en: ["border-image-width"],
        fa: ["عرض تصویر مرز"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "border-inline-end-color",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_INLINE_END_COLOR",
      reserved_values: "",
      text: {
        en: ["border-inline-end-color"],
        fa: ["رنگ مرز انتهایی خطی"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_COLOR",
    },
    {
      generate_name: "border-inline-end-style",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_INLINE_END_STYLE",
      reserved_values: "ast_layout_allowed_style_list_border_inline_end_style",
      text: {
        en: ["border-inline-end-style"],
        fa: ["سبک مرز انتهایی خطی"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "border-inline-end-width",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_INLINE_END_WIDTH",
      reserved_values: "",
      text: {
        en: ["border-inline-end-width"],
        fa: ["عرض مرز انتهایی خطی"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "border-inline-start-color",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_INLINE_START_COLOR",
      reserved_values: "",
      text: {
        en: ["border-inline-start-color"],
        fa: ["رنگ مرز ابتدایی خطی"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_COLOR",
    },
    {
      generate_name: "border-inline-start-style",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_INLINE_START_STYLE",
      reserved_values:
        "ast_layout_allowed_style_list_border_inline_start_style",
      text: {
        en: ["border-inline-start-style"],
        fa: ["سبک مرز ابتدایی خطی"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "border-inline-start-width",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_INLINE_START_WIDTH",
      reserved_values: "",
      text: {
        en: ["border-inline-start-width"],
        fa: ["عرض مرز ابتدایی خطی"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "border-left-color",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_LEFT_COLOR",
      reserved_values: "",
      text: {
        en: ["border-left-color"],
        fa: ["رنگ مرز چپ"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_COLOR",
    },
    {
      generate_name: "border-left-style",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_LEFT_STYLE",
      reserved_values: "ast_layout_allowed_style_list_border_left_style",
      text: {
        en: ["border-left-style"],
        fa: ["سبک مرز چپ"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "border-left-width",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_LEFT_WIDTH",
      reserved_values: "",
      text: {
        en: ["border-left-width"],
        fa: ["عرض مرز چپ"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "border-right-color",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_RIGHT_COLOR",
      reserved_values: "",
      text: {
        en: ["border-right-color"],
        fa: ["رنگ مرز راست"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_COLOR",
    },
    {
      generate_name: "border-right-style",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_RIGHT_STYLE",
      reserved_values: "ast_layout_allowed_style_list_border_right_style",
      text: {
        en: ["border-right-style"],
        fa: ["سبک مرز راست"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "border-right-width",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_RIGHT_WIDTH",
      reserved_values: "",
      text: {
        en: ["border-right-width"],
        fa: ["عرض مرز راست"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "border-spacing",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_SPACING",
      reserved_values: "",
      text: {
        en: ["border-spacing"],
        fa: ["فاصله مرز"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "border-start-end-radius",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_START_END_RADIUS",
      reserved_values: "",
      text: {
        en: ["border-start-end-radius"],
        fa: ["گردی ابتدا و انتها"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "border-start-start-radius",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_START_START_RADIUS",
      reserved_values: "",
      text: {
        en: ["border-start-start-radius"],
        fa: ["شعاع ابتدایی شروع مرز"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "border-top-color",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_TOP_COLOR",
      reserved_values: "",
      text: {
        en: ["border-top-color"],
        fa: ["رنگ مرز بالا"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_COLOR",
    },
    {
      generate_name: "border-top-left-radius",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_TOP_LEFT_RADIUS",
      reserved_values: "",
      text: {
        en: ["border-top-left-radius"],
        fa: ["گردی بالا چپ"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_COLOR",
    },
    {
      generate_name: "border-top-right-radius",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_TOP_RIGHT_RADIUS",
      reserved_values: "",
      text: {
        en: ["border-top-right-radius"],
        fa: ["گردی بالا راست"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "border-top-style",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_TOP_STYLE",
      reserved_values: "ast_layout_allowed_style_list_border_top_style",
      text: {
        en: ["border-top-style"],
        fa: ["سبک مرز بالا"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "border-top-width",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BORDER_TOP_WIDTH",
      reserved_values: "ast_layout_allowed_style_list_border_top_style",
      text: {
        en: ["border-top-width"],
        fa: ["عرض مرز بالا"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "bottom",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BOTTOM",
      reserved_values: "ast_layout_allowed_style_list_bottom",
      text: {
        en: ["bottom"],
        fa: ["پایین"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "box-sizing",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BOX_SIZING",
      reserved_values: "ast_layout_allowed_style_list_box_sizing",
      text: {
        en: ["box-sizing"],
        fa: ["نوع اندازه‌گیری جعبه", "نوع اندازه گیری جعبه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "box-shadow",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BOX_SHADOW",
      reserved_values: "",
      text: {
        en: ["box-shadow"],
        fa: ["سایه جعبه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING_ANY",
    },
    {
      generate_name: "break-inside",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BREAK_INSIDE",
      reserved_values: "ast_layout_allowed_style_list_break_inside",
      text: {
        en: ["break-inside"],
        fa: ["شکست درون"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "break-before",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BREAK_BEFORE",
      reserved_values: "ast_layout_allowed_style_list_break_before",
      text: {
        en: ["break-before"],
        fa: ["شکست قبل"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "break-after",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_BREAK_AFTER",
      reserved_values: "ast_layout_allowed_style_list_break_after",
      text: {
        en: ["break-after"],
        fa: ["شکست بعد"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "caption-side",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_CAPTION_SIDE",
      reserved_values: "ast_layout_allowed_style_list_caption_side",
      text: {
        en: ["caption-side"],
        fa: ["موقعیت عنوان"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "caret-color",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_CARET_COLOR",
      reserved_values: "",
      text: {
        en: ["caret-color"],
        fa: ["رنگ نشانگر متنی"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_COLOR",
    },
    {
      generate_name: "caret-color",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_CLEAR",
      reserved_values: "ast_layout_allowed_style_list_clear",
      text: {
        en: ["caret-color"],
        fa: ["پاک‌سازی", "پاک سازی"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "clip-path",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_CLIP_PATH",
      reserved_values: "ast_layout_allowed_style_list_clip_path",
      text: {
        en: ["clip-path"],
        fa: ["مسیر برش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "clip-rule",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_CLIP_RULE",
      reserved_values: "ast_layout_allowed_style_list_clip_rule",
      text: {
        en: ["clip-rule"],
        fa: ["قاعده برش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "color",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_COLOR",
      reserved_values: "",
      text: {
        en: ["color"],
        fa: ["رنگ"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_COLOR",
    },
    {
      generate_name: "color-interpolation",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_COLOR_INTERPOLATION",
      reserved_values: "ast_layout_allowed_style_list_color_interpolation",
      text: {
        en: ["color-interpolation"],
        fa: ["درهم‌آمیزی رنگ", "درهم آمیزی رنگ"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "color-interpolation-filters",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_COLOR_INTERPOLATION_FILTERS",
      reserved_values:
        "ast_layout_allowed_style_list_color_interpolation_filters",
      text: {
        en: ["color-interpolation-filters"],
        fa: ["درهم‌آمیزی رنگ فیلترها", "درهم آمیزی رنگ فیلترها"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "color-scheme",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_COLOR_SCHEME",
      reserved_values: "ast_layout_allowed_style_list_color_scheme",
      text: {
        en: ["color-scheme"],
        fa: ["طرح رنگ"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "column-count",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_COLUMN_COUNT",
      reserved_values: "ast_layout_allowed_style_list_column_count",
      text: {
        en: ["column-count"],
        fa: ["تعداد ستون‌ها", "تعداد ستون‌ ها"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_INTEGER",
    },
    {
      generate_name: "column-fill",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_COLUMN_FILL",
      reserved_values: "ast_layout_allowed_style_list_column_fill",
      text: {
        en: ["column-fill"],
        fa: ["پر کردن ستون‌ها", "پر کردن ستون ها"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "column-gap",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_COLUMN_GAP",
      reserved_values: "",
      text: {
        en: ["column-gap"],
        fa: ["فاصله بین ستون‌ها", "فاصله بین ستون‌ ها"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "column-rule-color",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_COLUMN_RULE_COLOR",
      reserved_values: "",
      text: {
        en: ["column-rule-color"],
        fa: ["رنگ خط افقی ستون"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_COLOR",
    },
    {
      generate_name: "column-rule-style",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_COLUMN_RULE_STYLE",
      reserved_values: "ast_layout_allowed_style_list_column_rule_style",
      text: {
        en: ["column-rule-style"],
        fa: ["سبک خط افقی ستون"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "column-rule-width",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_COLUMN_RULE_WIDTH",
      reserved_values: "",
      text: {
        en: ["column-rule-width"],
        fa: ["عرض خط افقی ستون"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "column-span",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_COLUMN_SPAN",
      reserved_values: "ast_layout_allowed_style_list_column_span",
      text: {
        en: ["column-span"],
        fa: ["گستردگی ستون‌ها", "گستردگی ستون ها"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "columns",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_COLUMNS",
      reserved_values: "",
      text: {
        en: ["columns"],
        fa: ["ستون‌ها", "ستون‌ ها"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING_ANY",
    },
    {
      generate_name: "contain",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_CONTAIN",
      reserved_values: "ast_layout_allowed_style_list_contain",
      text: {
        en: ["contain"],
        fa: ["حاوی بودن"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "contain-intrinsic-block-size",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_CONTAIN_INTRINSIC_BLOCK_SIZE",
      reserved_values:
        "ast_layout_allowed_style_list_contain_intrinsic_block_size",
      text: {
        en: ["contain-intrinsic-block-size"],
        fa: ["اندازه بلوک ذاتی"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "contain-intrinsic-height",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_CONTAIN_INTRINSIC_HEIGHT",
      reserved_values: "ast_layout_allowed_style_list_contain_intrinsic_height",
      text: {
        en: ["contain-intrinsic-height"],
        fa: ["ارتفاع ذاتی"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "contain-intrinsic-inline-size",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_CONTAIN_INTRINSIC_INLINE_SIZE",
      reserved_values:
        "ast_layout_allowed_style_list_contain_intrinsic_inline_size",
      text: {
        en: ["contain-intrinsic-inline-size"],
        fa: ["اندازه درون‌خطی ذاتی", "اندازه درون خطی ذاتی"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "contain-intrinsic-size",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_CONTAIN_INTRINSIC_SIZE",
      reserved_values: "ast_layout_allowed_style_list_contain_intrinsic_size",
      text: {
        en: ["contain-intrinsic-size"],
        fa: ["اندازه ذاتی"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "contain-intrinsic-width",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_CONTAIN_INTRINSIC_WIDTH",
      reserved_values: "ast_layout_allowed_style_list_contain_intrinsic_width",
      text: {
        en: ["contain-intrinsic-width"],
        fa: ["عرض ذاتی"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "container",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_CONTAINER",
      reserved_values: "ast_layout_allowed_style_list_container",
      text: {
        en: ["container"],
        fa: ["ظرف"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "container-name",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_CONTAINER_NAME",
      reserved_values: "ast_layout_allowed_style_list_container_name",
      text: {
        en: ["container-name"],
        fa: ["نام ظرف"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "container-type",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_CONTAINER_TYPE",
      reserved_values: "ast_layout_allowed_style_list_container_type",
      text: {
        en: ["container-type"],
        fa: ["نوع ظرف"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "content",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_CONTENT",
      reserved_values: "ast_layout_allowed_style_list_content",
      text: {
        en: ["content"],
        fa: ["محتوا"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "content-visibility",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_CONTENT_VISIBILITY",
      reserved_values: "ast_layout_allowed_style_list_content_visibility",
      text: {
        en: ["content-visibility"],
        fa: ["مشاهده محتوا"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "counter-increment",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_COUNTER_INCREMENT",
      reserved_values: "ast_layout_allowed_style_list_counter_increment",
      text: {
        en: ["counter-increment"],
        fa: ["افزایش شمارنده"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_INTEGER",
    },
    {
      generate_name: "counter-reset",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_COUNTER_RESET",
      reserved_values: "",
      text: {
        en: ["counter-reset"],
        fa: ["بازنشانی شمارنده"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_INTEGER",
    },
    {
      generate_name: "counter-set",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_COUNTER_SET",
      reserved_values: "ast_layout_allowed_style_list_counter_set",
      text: {
        en: ["counter-set"],
        fa: ["تنظیم شمارنده"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_INTEGER",
    },
    {
      generate_name: "cursor",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_CURSOR",
      reserved_values: "ast_layout_allowed_style_list_cursor",
      text: {
        en: ["cursor"],
        fa: ["نشانگر"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "direction",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_DIRECTION",
      reserved_values: "ast_layout_allowed_style_list_direction",
      text: {
        en: ["direction"],
        fa: ["جهت"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "display",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_DISPLAY",
      reserved_values: "ast_layout_allowed_style_list_display",
      text: {
        en: ["display"],
        fa: ["قرارگیری", "قرار گیری"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "empty-cells",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_EMPTY_CELLS",
      reserved_values: "ast_layout_allowed_style_list_empty_cells",
      text: {
        en: ["empty-cells"],
        fa: ["سلول‌های خالی", "سلول های خالی"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "fill",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_FILL",
      reserved_values: "ast_layout_allowed_style_list_fill",
      text: {
        en: ["fill"],
        fa: ["پر کردن"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "fill-opacity",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_FILL_OPACITY",
      reserved_values: "ast_layout_allowed_style_list_fill",
      text: {
        en: ["fill-opacity"],
        fa: ["شفافیت پر کردن"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_PERCENTAGE",
    },
    {
      generate_name: "fill-rule",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_FILL_RULE",
      reserved_values: "ast_layout_allowed_style_list_fill_rule",
      text: {
        en: ["fill-rule"],
        fa: ["قاعده پر کردن"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "filter",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_FILTER",
      reserved_values: "ast_layout_allowed_style_list_filter",
      text: {
        en: ["filter"],
        fa: ["فیلتر"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "flex",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_FLEX",
      reserved_values: "ast_layout_allowed_style_list_flex",
      text: {
        en: ["flex"],
        fa: ["انعطاف"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "flex-direction",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_FLEX_DIRECTION",
      reserved_values: "ast_layout_allowed_style_list_flex_direction",
      text: {
        en: ["flex-direction"],
        fa: ["جهت انعطاف"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "flex-flow",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_FLEX_FLOW",
      reserved_values: "ast_layout_allowed_style_list_flex_flow",
      text: {
        en: ["flex-flow"],
        fa: ["جریان انعطاف"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "flex-grow",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_FLEX_GROW",
      reserved_values: "",
      text: {
        en: ["flex-grow"],
        fa: ["رشد انعطاف"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_INTEGER",
    },
    {
      generate_name: "flex-shrink",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_FLEX_SHRINK",
      reserved_values: "",
      text: {
        en: ["flex-shrink"],
        fa: ["کوچک‌شدن انعطاف", "کوچک‌ شدن انعطاف"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_INTEGER",
    },
    {
      generate_name: "flex-wrap",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_FLEX_WRAP",
      reserved_values: "ast_layout_allowed_style_list_flex_wrap",
      text: {
        en: ["flex-wrap"],
        fa: ["چینش انعطاف"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "float",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_FLOAT",
      reserved_values: "ast_layout_allowed_style_list_float",
      text: {
        en: ["float"],
        fa: ["شناور"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "font-family",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_FONT_FAMILY",
      reserved_values: "ast_layout_allowed_style_list_font_family",
      text: {
        en: ["font-family"],
        fa: ["نام قلم"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRINGS_ANY",
    },
    {
      generate_name: "font-feature-settings",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_FONT_FEATURE_SETTINGS",
      reserved_values: "ast_layout_allowed_style_list_font_feature_settings",
      text: {
        en: ["font-feature-settings"],
        fa: ["تنظیمات ویژگی قلم"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "font-kerning",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_FONT_KERNING",
      reserved_values: "ast_layout_allowed_style_list_font_kerning",
      text: {
        en: ["font-kerning"],
        fa: ["کرنینگ قلم"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "font-language-override",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_FONT_LANGUAGE_OVERRIDE",
      reserved_values: "ast_layout_allowed_style_list_font_language_override",
      text: {
        en: ["font-language-override"],
        fa: ["بازنویسی زبان قلم"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "font-optical-sizing",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_FONT_OPTICAL_SIZING",
      reserved_values: "ast_layout_allowed_style_list_font_optical_sizing",
      text: {
        en: ["font-optical-sizing"],
        fa: ["اندازه‌گیری اپتیکال قلم", "اندازه گیری اپتیکال قلم"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "font-size",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_FONT_SIZE",
      reserved_values: "",
      text: {
        en: ["font-size"],
        fa: ["اندازه قلم"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "font-stretch",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_FONT_STRETCH",
      reserved_values: "ast_layout_allowed_style_list_font_stretch",
      text: {
        en: ["font-stretch"],
        fa: ["کشیدگی قلم"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "font-style",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_FONT_STYLE",
      reserved_values: "ast_layout_allowed_style_list_font_style",
      text: {
        en: ["font-style"],
        fa: ["سبک قلم"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "font-variant",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_FONT_VARIANT",
      reserved_values: "ast_layout_allowed_style_list_font_variant",
      text: {
        en: ["font-variant"],
        fa: ["نوع قلم"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "font-display",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_FONT_DISPLAY",
      reserved_values: "ast_layout_allowed_style_list_font_display",
      text: {
        en: ["font-display"],
        fa: ["نمایش قلم"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "font-weight",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_FONT_WEIGHT",
      reserved_values: "ast_layout_allowed_style_list_font_weight",
      text: {
        en: ["font-weight"],
        fa: ["وزن قلم"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_POSITIVE_INTEGER",
    },
    {
      generate_name: "grid",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_GRID",
      reserved_values: "ast_layout_allowed_style_list_grid",
      text: {
        en: ["grid"],
        fa: ["شبکه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "grid-area",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_GRID_AREA",
      reserved_values: "ast_layout_allowed_style_list_grid_area",
      text: {
        en: ["grid-area"],
        fa: ["منطقه شبکه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "grid-auto-columns",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_GRID_AUTO_COLUMNS",
      reserved_values: "ast_layout_allowed_style_list_grid_auto_columns",
      text: {
        en: ["grid-auto-columns"],
        fa: ["ستون‌های خودکار شبکه", "ستون های خودکار شبکه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "grid-auto-flow",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_GRID_AUTO_FLOW",
      reserved_values: "ast_layout_allowed_style_list_grid_auto_flow",
      text: {
        en: ["grid-auto-flow"],
        fa: ["جریان خودکار شبکه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "grid-auto-rows",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_GRID_AUTO_ROWS",
      reserved_values: "ast_layout_allowed_style_list_grid_auto_rows",
      text: {
        en: ["grid-auto-rows"],
        fa: ["ردیف‌های خودکار شبکه", "ردیف های خودکار شبکه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "grid-column",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_GRID_COLUMN",
      reserved_values: "ast_layout_allowed_style_list_grid_column",
      text: {
        en: ["grid-column"],
        fa: ["ستون‌های شبکه", "ستون های شبکه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "grid-column-end",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_GRID_COLUMN_END",
      reserved_values: "ast_layout_allowed_style_list_grid_column_end",
      text: {
        en: ["grid-column-end"],
        fa: ["پایان ستون شبکه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "grid-column-start",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_GRID_COLUMN_START",
      reserved_values: "ast_layout_allowed_style_list_grid_column_start",
      text: {
        en: ["grid-column-start"],
        fa: ["شروع ستون شبکه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "grid-row",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_GRID_ROW",
      reserved_values: "ast_layout_allowed_style_list_grid_row",
      text: {
        en: ["grid-row"],
        fa: ["ردیف‌های شبکه", "ردیف های شبکه", "پایان ردیف شبکه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "grid-row-start",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_GRID_ROW_START",
      reserved_values: "ast_layout_allowed_style_list_grid_row_start",
      text: {
        en: ["grid-row-start"],
        fa: ["شروع ردیف شبکه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "grid-template",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_GRID_TEMPLATE",
      reserved_values: "ast_layout_allowed_style_list_grid_template",
      text: {
        en: ["grid-template"],
        fa: ["الگوی شبکه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "grid-template-areas",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_GRID_TEMPLATE_AREAS",
      reserved_values: "ast_layout_allowed_style_list_grid_template_areas",
      text: {
        en: ["grid-template-areas"],
        fa: ["مناطق الگوی شبکه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "grid-template-columns",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_GRID_TEMPLATE_COLUMNS",
      reserved_values: "ast_layout_allowed_style_list_grid_template_columns",
      text: {
        en: ["grid-template-columns"],
        fa: ["ستون‌های الگوی شبکه", "ستون های الگوی شبکه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "grid-template-rows",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_GRID_TEMPLATE_ROWS",
      reserved_values: "ast_layout_allowed_style_list_grid_template_rows",
      text: {
        en: ["grid-template-rows"],
        fa: ["ردیف‌های الگوی شبکه", "ردیف های الگوی شبکه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "justify-content",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_JUSTIFY_CONTENT",
      reserved_values: "ast_layout_allowed_style_list_justify_content",
      text: {
        en: ["justify-content"],
        fa: ["توجیه محتوا"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "left",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_LEFT",
      reserved_values: "ast_layout_allowed_style_list_left",
      text: {
        en: ["left"],
        fa: ["چپ"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "letter-spacing",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_LETTER_SPACING",
      reserved_values: "",
      text: {
        en: ["letter-spacing"],
        fa: ["فاصله بین حروف"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING_ANY",
    },
    {
      generate_name: "line-height",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_LINE_HEIGHT",
      reserved_values: "",
      text: {
        en: ["line-height"],
        fa: ["ارتفاع خط"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING_ANY",
    },
    {
      generate_name: "list-style",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_LIST_STYLE",
      reserved_values: "ast_layout_allowed_style_list_list_style",
      text: {
        en: ["list-style"],
        fa: ["سبک فهرست"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "margin",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_MARGIN",
      reserved_values: "ast_layout_allowed_style_list_margin",
      text: {
        en: ["margin"],
        fa: ["فضا"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZES124",
    },
    {
      generate_name: "margin-bottom",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_MARGIN_BOTTOM",
      reserved_values: "ast_layout_allowed_style_list_margin_bottom",
      text: {
        en: ["margin-bottom"],
        fa: ["فضا پایین", "فضای پایین"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZES124",
    },
    {
      generate_name: "margin-left",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_MARGIN_LEFT",
      reserved_values: "ast_layout_allowed_style_list_margin_left",
      text: {
        en: ["margin-left"],
        fa: ["فضا چپ", "فضای چپ"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZES124",
    },
    {
      generate_name: "margin-right",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_MARGIN_RIGHT",
      reserved_values: "ast_layout_allowed_style_list_margin_right",
      text: {
        en: ["margin-right"],
        fa: ["فضا راست", "فضای راست"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZES124",
    },
    {
      generate_name: "margin-top",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_MARGIN_TOP",
      reserved_values: "ast_layout_allowed_style_list_margin_top",
      text: {
        en: ["margin-top"],
        fa: ["فضا بالا", "فضای بالا"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZES124",
    },
    {
      generate_name: "max-height",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_MAX_HEIGHT",
      reserved_values: "",
      text: {
        en: ["max-height"],
        fa: ["حداکثر ارتفاع"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "max-width",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_MAX_WIDTH",
      reserved_values: "",
      text: {
        en: ["max-width"],
        fa: ["حداکثر عرض"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "min-height",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_MIN_HEIGHT",
      reserved_values: "",
      text: {
        en: ["min-height"],
        fa: ["حداقل ارتفاع"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "min-width",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_MIN_WIDTH",
      reserved_values: "",
      text: {
        en: ["min-width"],
        fa: ["حداقل عرض"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "object-fit",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_OBJECT_FIT",
      reserved_values: "ast_layout_allowed_style_list_object_fit",
      text: {
        en: ["object-fit"],
        fa: ["تناسب شیء"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "opacity",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_OPACITY",
      reserved_values: "",
      text: {
        en: ["opacity"],
        fa: ["شفافیت"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_PERCENTAGE",
    },
    {
      generate_name: "overflow",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_OVERFLOW",
      reserved_values: "ast_layout_allowed_style_list_overflow",
      text: {
        en: ["overflow"],
        fa: ["بیش از حد"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "overflow-x",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_OVERFLOW_X",
      reserved_values: "ast_layout_allowed_style_list_overflow_x",
      text: {
        en: ["overflow-x"],
        fa: ["بیش از حد (X)"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "overflow-y",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_OVERFLOW_Y",
      reserved_values: "ast_layout_allowed_style_list_overflow_y",
      text: {
        en: ["overflow-y"],
        fa: ["بیش از حد (Y)"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "padding",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_PADDING",
      reserved_values: "ast_layout_allowed_style_list_padding",
      text: {
        en: ["padding"],
        fa: ["فاصله"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZES124",
    },
    {
      generate_name: "padding-right",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_PADDING_RIGHT",
      reserved_values: "ast_layout_allowed_style_list_padding",
      text: {
        en: ["padding-right"],
        fa: ["فاصله راست"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZES124",
    },
    {
      generate_name: "padding-left",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_PADDING_LEFT",
      reserved_values: "ast_layout_allowed_style_list_padding",
      text: {
        en: ["padding-left"],
        fa: ["فاصله چپ"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZES124",
    },
    {
      generate_name: "padding-top",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_PADDING_TOP",
      reserved_values: "ast_layout_allowed_style_list_padding",
      text: {
        en: ["padding-top"],
        fa: ["فاصله بالا"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZES124",
    },
    {
      generate_name: "padding-bottom",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_PADDING_BOTTOM",
      reserved_values: "ast_layout_allowed_style_list_padding",
      text: {
        en: ["padding-bottom"],
        fa: ["فاصله پایین"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZES124",
    },
    {
      generate_name: "text-decoration",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_TEXT_DECORATION",
      reserved_values: "ast_layout_allowed_style_list_text_decoration",
      text: {
        en: ["text-decoration"],
        fa: ["زینت متن"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "text-transform",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_TEXT_TRANSFORM",
      reserved_values: "ast_layout_allowed_style_list_text_transform",
      text: {
        en: ["text-transform"],
        fa: ["تبدیل متن"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "visibility",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_VISIBILITY",
      reserved_values: "ast_layout_allowed_style_list_visibility",
      text: {
        en: ["visibility"],
        fa: ["قابلیت مشاهده"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "z-index",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_Z_INDEX",
      reserved_values: "ast_layout_allowed_style_list_z_index",
      text: {
        en: ["z-index"],
        fa: ["الویت موقعیت", "ترتیب اولویت"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_INTEGER",
    },
    {
      generate_name: "outline-color",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_OUTLINE_COLOR",
      reserved_values: "ast_layout_allowed_style_list_outline_color",
      text: {
        en: ["outline-color"],
        fa: ["رنگ مرز"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_COLOR",
    },
    {
      generate_name: "outline-offset",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_OUTLINE_OFFSET",
      reserved_values: "",
      text: {
        en: ["outline-offset"],
        fa: ["فاصله حاشیه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "outline-style",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_OUTLINE_STYLE",
      reserved_values: "ast_layout_allowed_style_list_outline_style",
      text: {
        en: ["outline-style"],
        fa: ["سبک حاشیه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "outline-width",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_OUTLINE_WIDTH",
      reserved_values: "ast_layout_allowed_style_list_outline_width",
      text: {
        en: ["outline-width"],
        fa: ["عرض حاشیه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "overflow-anchor",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_OVERFLOW_ANCHOR",
      reserved_values: "ast_layout_allowed_style_list_overflow_anchor",
      text: {
        en: ["overflow-anchor"],
        fa: ["لنگر بیش از حد"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "overflow-block",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_OVERFLOW_BLOCK",
      reserved_values: "ast_layout_allowed_style_list_overflow_block",
      text: {
        en: ["overflow-block"],
        fa: ["بیش از حد بلوک"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "overflow-clip-margin",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_OVERFLOW_CLIP_MARGIN",
      reserved_values: "",
      text: {
        en: ["overflow-clip-margin"],
        fa: ["فاصله برش بیش از حد"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "overflow-inline",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_OVERFLOW_INLINE",
      reserved_values: "ast_layout_allowed_style_list_overflow_inline",
      text: {
        en: ["overflow-inline"],
        fa: ["بیش از حد درون خطی"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "overflow-wrap",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_OVERFLOW_WRAP",
      reserved_values: "ast_layout_allowed_style_list_overflow_wrap",
      text: {
        en: ["overflow-wrap"],
        fa: ["پیچش بیش از حد"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "padding-block",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_PADDING_BLOCK",
      reserved_values: "",
      text: {
        en: ["padding-block"],
        fa: ["فاصله بلوک"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "padding-block-end",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_PADDING_BLOCK_END",
      reserved_values: "ast_layout_allowed_style_list_padding_block_end",
      text: {
        en: ["padding-block-end"],
        fa: ["فاصله انتهای بلوک"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "padding-block-start",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_PADDING_BLOCK_START",
      reserved_values: "ast_layout_allowed_style_list_padding_block_start",
      text: {
        en: ["padding-block-start"],
        fa: ["فاصله شروع بلوک"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "padding-inline",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_PADDING_INLINE",
      reserved_values: "ast_layout_allowed_style_list_padding_inline",
      text: {
        en: ["padding-inline"],
        fa: ["فاصله درون خطی"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "padding-inline-end",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_PADDING_INLINE_END",
      reserved_values: "ast_layout_allowed_style_list_padding_inline_end",
      text: {
        en: ["padding-inline-end"],
        fa: ["فاصله انتهای درون خطی"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "padding-inline-start",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_PADDING_INLINE_START",
      reserved_values: "ast_layout_allowed_style_list_padding_inline_start",
      text: {
        en: ["padding-inline-start"],
        fa: ["فاصله شروع درون خطی"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "page",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_PAGE",
      reserved_values: "ast_layout_allowed_style_list_page",
      text: {
        en: ["page"],
        fa: ["صفحه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "page-break-after",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_PAGE_BREAK_AFTER",
      reserved_values: "ast_layout_allowed_style_list_page_break_after",
      text: {
        en: ["page-break-after"],
        fa: ["شکست صفحه بعد از"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "page-break-before",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_PAGE_BREAK_BEFORE",
      reserved_values: "ast_layout_allowed_style_list_page_break_before",
      text: {
        en: ["page-break-before"],
        fa: ["شکست صفحه قبل از"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "page-break-inside",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_PAGE_BREAK_INSIDE",
      reserved_values: "ast_layout_allowed_style_list_page_break_inside",
      text: {
        en: ["page-break-inside"],
        fa: ["شکست صفحه درون"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "paint-order",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_PAINT_ORDER",
      reserved_values: "ast_layout_allowed_style_list_paint_order",
      text: {
        en: ["paint-order"],
        fa: ["ترتیب نقاشی"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "perspective",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_PERSPECTIVE",
      reserved_values: "ast_layout_allowed_style_list_perspective",
      text: {
        en: ["perspective"],
        fa: ["پرسپکتیو"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "perspective-origin",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_PERSPECTIVE_ORIGIN",
      reserved_values: "ast_layout_allowed_style_list_perspective",
      text: {
        en: ["perspective-origin"],
        fa: ["مبدأ پرسپکتیو"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING_ANY",
    },
    {
      generate_name: "place-content",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_PLACE_CONTENT",
      reserved_values: "ast_layout_allowed_style_list_place_content",
      text: {
        en: ["place-content"],
        fa: ["محتوای مکان"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "place-items",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_PLACE_ITEMS",
      reserved_values: "ast_layout_allowed_style_list_place_items",
      text: {
        en: ["place-items"],
        fa: ["موارد مکان"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "place-self",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_PLACE_SELF",
      reserved_values: "ast_layout_allowed_style_list_place_self",
      text: {
        en: ["place-self"],
        fa: ["خود مکان"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "pointer-events",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_POINTER_EVENTS",
      reserved_values: "ast_layout_allowed_style_list_pointer_events",
      text: {
        en: ["pointer-events"],
        fa: ["رویدادهای اشاره‌گر", "رویدادهای اشاره گر"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "position",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_POSITION",
      reserved_values: "ast_layout_allowed_style_list_position",
      text: {
        en: ["position"],
        fa: ["موقعیت"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "print-color-adjust",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_PRINT_COLOR_ADJUST",
      reserved_values: "ast_layout_allowed_style_list_print_color_adjust",
      text: {
        en: ["print-color-adjust"],
        fa: ["تنظیم رنگ چاپ"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "quotes",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_QUOTES",
      reserved_values: "ast_layout_allowed_style_list_quotes",
      text: {
        en: ["quotes"],
        fa: ["نقل‌قول", "نقل قول"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "r",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_R",
      reserved_values: "",
      text: {
        en: ["r"],
        fa: ["شعاع"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "resize",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_RESIZE",
      reserved_values: "ast_layout_allowed_style_list_resize",
      text: {
        en: ["resize"],
        fa: ["تغییر اندازه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "right",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_RIGHT",
      reserved_values: "ast_layout_allowed_style_list_right",
      text: {
        en: ["right"],
        fa: ["راست"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "rotate",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_ROTATE",
      reserved_values: "ast_layout_allowed_style_list_rotate",
      text: {
        en: ["rotate"],
        fa: ["چرخش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "row-gap",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_ROW_GAP",
      reserved_values: "ast_layout_allowed_style_list_rotate",
      text: {
        en: ["row-gap"],
        fa: ["فاصله ردیف"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "ruby-align",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_RUBY_ALIGN",
      reserved_values: "ast_layout_allowed_style_list_ruby_align",
      text: {
        en: ["ruby-align"],
        fa: ["هم‌راستایی روبی", "هم راستایی روبی"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "ruby-position",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_RUBY_POSITION",
      reserved_values: "ast_layout_allowed_style_list_ruby_position",
      text: {
        en: ["ruby-position"],
        fa: ["موقعیت روبی"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "rx",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_RX",
      reserved_values: "",
      text: {
        en: ["rx"],
        fa: ["شعاع X"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "ry",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_RY",
      reserved_values: "",
      text: {
        en: ["ry"],
        fa: ["شعاع Y"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "scale",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCALE",
      reserved_values: "",
      text: {
        en: ["scale"],
        fa: ["مقیاس"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING_ANY",
    },
    {
      generate_name: "scroll-behavior",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_BEHAVIOR",
      reserved_values: "ast_layout_allowed_style_list_scroll_behavior",
      text: {
        en: ["scroll-behavior"],
        fa: ["رفتار پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "scroll-margin",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_MARGIN",
      reserved_values: "",
      text: {
        en: ["scroll-margin"],
        fa: ["فاصله پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "scroll-margin-block",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_MARGIN_BLOCK",
      reserved_values: "",
      text: {
        en: ["scroll-margin-block"],
        fa: ["فاصله بلوک پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "scroll-margin-block-end",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_MARGIN_BLOCK_END",
      reserved_values: "",
      text: {
        en: ["scroll-margin-block-end"],
        fa: ["فاصله انتهای بلوک پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "scroll-margin-block-start",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_MARGIN_BLOCK_START",
      reserved_values: "",
      text: {
        en: ["scroll-margin-block-start"],
        fa: ["فاصله شروع بلوک پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "scroll-margin-bottom",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_MARGIN_BOTTOM",
      reserved_values: "",
      text: {
        en: ["scroll-margin-bottom"],
        fa: ["فاصله پایین پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "scroll-margin-inline",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_MARGIN_INLINE",
      reserved_values: "",
      text: {
        en: ["scroll-margin-inline"],
        fa: ["فاصله درون خطی پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "scroll-margin-inline-end",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_MARGIN_INLINE_END",
      reserved_values: "",
      text: {
        en: ["scroll-margin-inline-end"],
        fa: ["فاصله انتهای درون خطی پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "scroll-margin-inline-start",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_MARGIN_INLINE_START",
      reserved_values: "",
      text: {
        en: ["scroll-margin-inline-start"],
        fa: ["فاصله شروع درون خطی پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "scroll-margin-left",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_MARGIN_LEFT",
      reserved_values: "",
      text: {
        en: ["scroll-margin-left"],
        fa: ["فاصله چپ پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "scroll-margin-right",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_MARGIN_RIGHT",
      reserved_values: "",
      text: {
        en: ["scroll-margin-right"],
        fa: ["فاصله راست پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "scroll-margin-top",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_MARGIN_TOP",
      reserved_values: "",
      text: {
        en: ["scroll-margin-top"],
        fa: ["فاصله بالا پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "scroll-padding",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_PADDING",
      reserved_values: "",
      text: {
        en: ["scroll-padding"],
        fa: ["فاصله پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "scroll-padding-block",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_PADDING_BLOCK",
      reserved_values: "",
      text: {
        en: ["scroll-padding-block"],
        fa: ["فاصله بلوک پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "scroll-padding-block-end",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_PADDING_BLOCK_END",
      reserved_values: "",
      text: {
        en: ["scroll-padding-block-end"],
        fa: ["فاصله انتهای بلوک پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "scroll-padding-block-start",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_PADDING_BLOCK_START",
      reserved_values: "",
      text: {
        en: ["scroll-padding-block-start"],
        fa: ["فاصله شروع بلوک پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "scroll-padding-bottom",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_PADDING_BOTTOM",
      reserved_values: "",
      text: {
        en: ["scroll-padding-bottom"],
        fa: ["فاصله پایین پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "scroll-padding-inline",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_PADDING_INLINE",
      reserved_values: "",
      text: {
        en: ["scroll-padding-inline"],
        fa: ["فاصله درون خطی پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "scroll-padding-inline-end",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_PADDING_INLINE_END",
      reserved_values: "",
      text: {
        en: ["scroll-padding-inline-end"],
        fa: ["فاصله انتهای درون خطی پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "scroll-padding-inline-start",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_PADDING_INLINE_START",
      reserved_values: "",
      text: {
        en: ["scroll-padding-inline-start"],
        fa: ["فاصله شروع درون خطی پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "scroll-padding-left",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_PADDING_LEFT",
      reserved_values: "",
      text: {
        en: ["scroll-padding-left"],
        fa: ["فاصله چپ پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "scroll-padding-right",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_PADDING_RIGHT",
      reserved_values: "",
      text: {
        en: ["scroll-padding-right"],
        fa: ["فاصله راست پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "scroll-padding-top",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_PADDING_TOP",
      reserved_values: "",
      text: {
        en: ["scroll-padding-top"],
        fa: ["فاصله بالا پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "scroll-snap-align",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_SNAP_ALIGN",
      reserved_values: "ast_layout_allowed_style_list_scroll_snap_align",
      text: {
        en: ["scroll-snap-align"],
        fa: ["تراز پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "scroll-snap-type",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SCROLL_SNAP_TYPE",
      reserved_values: "ast_layout_allowed_style_list_scroll_snap_type",
      text: {
        en: ["scroll-snap-type"],
        fa: ["نوع پیمایش"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "shape-outside",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_SHAPE_OUTSIDE",
      reserved_values: "ast_layout_allowed_style_list_shape_outside",
      text: {
        en: ["shape-outside"],
        fa: ["شکل خارج"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "text-align",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_TEXT_ALIGN",
      reserved_values: "ast_layout_allowed_style_list_text_align",
      text: {
        en: ["text-align"],
        fa: ["تراز متن"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "text-align-last",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_TEXT_ALIGN_LAST",
      reserved_values: "ast_layout_allowed_style_list_text_align_last",
      text: {
        en: ["text-align-last"],
        fa: ["تراز آخرین متن"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "align-items",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_ALIGN_ITEMS",
      reserved_values: "ast_layout_allowed_style_list_align_items",
      text: {
        en: ["align-items"],
        fa: [
          "تراز‌کردن‌ اقلام",
          "تراز‌ کردن‌ اقلام",
          "تراز‌کردن‌ محتوا",
          "تراز محتوا",
        ],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "text-indent",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_TEXT_INDENT",
      reserved_values: "ast_layout_allowed_style_list_text_indent",
      text: {
        en: ["text-indent"],
        fa: ["تورفتگی متن", "تو رفتگی متن"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "top",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_TOP",
      reserved_values: "ast_layout_allowed_style_list_top",
      text: {
        en: ["top"],
        fa: ["بالا"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "transform",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_TRANSFORM",
      reserved_values: "ast_layout_allowed_style_list_transform",
      text: {
        en: ["transform"],
        fa: ["تبدیل"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING_ANY",
    },
    {
      generate_name: "transform-origin",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_TRANSFORM_ORIGIN",
      reserved_values: "ast_layout_allowed_style_list_transform_origin",
      text: {
        en: ["transform-origin"],
        fa: ["مرکز تبدیل"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "translate",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_TRANSLATE",
      reserved_values: "",
      text: {
        en: ["translate"],
        fa: ["ترجمه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "unicode-bidi",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_UNICODE_BIDI",
      reserved_values: "ast_layout_allowed_style_list_unicode_bidi",
      text: {
        en: ["unicode-bidi"],
        fa: ["معکوس یونیکد"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "user-select",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_USER_SELECT",
      reserved_values: "ast_layout_allowed_style_list_user_select",
      text: {
        en: ["user-select"],
        fa: ["انتخاب کاربر"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "will-change",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_WILL_CHANGE",
      reserved_values: "ast_layout_allowed_style_list_will_change",
      text: {
        en: ["will-change"],
        fa: ["تغییر خواهد کرد"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "transform-box",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_TRANSFORM_BOX",
      reserved_values: "ast_layout_allowed_style_list_transform_box",
      text: {
        en: ["transform-box"],
        fa: ["باکس تبدیل"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "transform-style",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_TRANSFORM_STYLE",
      reserved_values: "ast_layout_allowed_style_list_transform_style",
      text: {
        en: ["transform-style"],
        fa: ["سبک تبدیل"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "transition",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_TRANSITION",
      reserved_values: "ast_layout_allowed_style_list_transition",
      text: {
        en: ["transition"],
        fa: ["انتقال"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING_ANY",
    },
    {
      generate_name: "transition-behavior",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_TRANSITION_BEHAVIOR",
      reserved_values: "ast_layout_allowed_style_list_transition_behavior",
      text: {
        en: ["transition-behavior"],
        fa: ["رفتار انتقال"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "transition-behavior",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_TRANSITION_DELAY",
      reserved_values: "ast_layout_allowed_style_list_transition_delay",
      text: {
        en: ["transition-delay"],
        fa: ["تاخیر انتقال"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_TIME",
    },
    {
      generate_name: "transition-behavior",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_TRANSITION_DURATION",
      reserved_values: "ast_layout_allowed_style_list_transition_duration",
      text: {
        en: ["transition-delay"],
        fa: ["مدت انتقال"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_TIME",
    },
    {
      generate_name: "transition-property",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_TRANSITION_PROPERTY",
      reserved_values: "ast_layout_allowed_style_list_transition_property",
      text: {
        en: ["transition-property"],
        fa: ["ویژگی انتقال"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "transition-timing-function",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_TRANSITION_TIMING_FUNCTION",
      reserved_values:
        "ast_layout_allowed_style_list_transition_timing_function",
      text: {
        en: ["transition-timing-function"],
        fa: ["تابع زمان‌بندی انتقال", "تابع زمان بندی انتقال"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "vector-effect",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_VECTOR_EFFECT",
      reserved_values: "ast_layout_allowed_style_list_vector_effect",
      text: {
        en: ["vector-effect"],
        fa: ["اثر وکتور"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "vertical-align",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_VERTICAL_ALIGN",
      reserved_values: "ast_layout_allowed_style_list_vertical_align",
      text: {
        en: ["vertical-align"],
        fa: ["تراز عمودی"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "white-space",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_WHITE_SPACE",
      reserved_values: "ast_layout_allowed_style_list_white_space",
      text: {
        en: ["white-space"],
        fa: ["فضای سفید"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "widows",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_WIDOWS",
      reserved_values: "",
      text: {
        en: ["widows"],
        fa: ["بیوه‌ها", "بیوه‌ ها"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "word-break",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_WORD_BREAK",
      reserved_values: "ast_layout_allowed_style_list_word_break",
      text: {
        en: ["word-break"],
        fa: ["شکستن کلمه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "word-spacing",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_WORD_SPACING",
      reserved_values: "",
      text: {
        en: ["word-spacing"],
        fa: ["فاصله کلمه"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_SIZE",
    },
    {
      generate_name: "writing-mode",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_WRITING_MODE",
      reserved_values: "ast_layout_allowed_style_list_writing_mode",
      text: {
        en: ["writing-mode"],
        fa: ["حالت نوشتن"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      generate_name: "zoom",
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_ZOOM",
      reserved_values: "ast_layout_allowed_style_list_zoom",
      text: {
        en: ["zoom"],
        fa: ["بزرگنمایی"],
      },
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING",
    },
    {
      id: "AST_LAYOUT_ATTRIBUTE_STYLE_TYPE_ERROR",
      reserved_values: "",
      type: "AST_LAYOUT_ATTRIBUTE_FILTER_STRING_ANY",
    },
  ],
};

export default result;
