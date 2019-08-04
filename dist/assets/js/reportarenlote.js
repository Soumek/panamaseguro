$(document).ready(function () {
    $('.dropify').dropify({
        messages: {
            default: 'Arrastra y suelta el archivo aquí o haz click...',
            replace: 'Arrastra y suelta el archivo para reemplazarlo',
            remove: 'Remover',
            error: 'Ooops, algo salió mal.'
        },
        error: {
            fileSize: 'El tamaño del archivo es muy grande, máximo ({{ value }}).',
            minWidth: 'El ancho de la imagen es muy pequeño ({{ value }}}px mínimo).',
            maxWidth: 'El ancho de la imagen es muy grande ({{ value }}}px máximo).',
            minHeight:
                'La altura de la imagen es muy pequeña ({{ value }}}px mínimo).',
            maxHeight: 'La altura de la imagen es muy grande ({{ value }}px máximo).',
            imageFormat:
                'Este formato de imagen no está permitido, solamente ({{ value }}).'
        }
    });


});
